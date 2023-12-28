import express from 'express';
import cors from 'cors';
import { processAllPDFsInDirectory } from './src/services/extractorData.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { savePDFData } from './src/controllers/invoice-controller.js';

// Configuração básica do Express
const app = express();
const port = 3000;

// Middleware para habilitar o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Obtenção do caminho do diretório atual do arquivo em execução
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Caminho para o diretório contendo os arquivos PDF
const pdfDirectory = join(__dirname, 'faturas');

// Rota principal para processar todos os arquivos PDF no diretório e salvar os dados
app.get('/', async (req, res) => {
  try {
    const pdfDataArray = await processAllPDFsInDirectory(pdfDirectory);

    // Salva os dados extraídos dos PDFs no banco de dados
    for (const pdfData of pdfDataArray) {
      await savePDFData(pdfData);
    }

    // Retorna os dados extraídos como resposta JSON
    res.json(pdfDataArray);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao processar arquivos PDF' });
  }
});

// Rota para obter uma lista de clientes únicos presentes nos arquivos PDF
app.get('/clientes', async (req, res) => {
  try {
    const pdfDataArray = await processAllPDFsInDirectory(pdfDirectory);

    // Extrai números de cliente únicos e os retorna como resposta JSON
    const uniqueClientes = Array.from(new Set(pdfDataArray.map((pdfData) => pdfData.data.numeroCliente)));
    res.json(uniqueClientes);
  } catch (error) {
    console.error('Erro ao obter lista de clientes:', error);
    res.status(500).json({ error: 'Erro ao obter lista de clientes' });
  }
});

// Rota para obter dados específicos de um cliente com base no número do cliente
app.get('/cliente/:numeroCliente', async (req, res) => {
  const { numeroCliente } = req.params;

  try {
    // Filtra os dados apenas para o cliente específico e os retorna como resposta JSON
    const pdfDataArray = await processAllPDFsInDirectory(pdfDirectory);
    const clienteData = pdfDataArray.filter((data) => data.data.numeroCliente === numeroCliente);
    res.json(clienteData);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao processar arquivos PDF' });
  }
});

// Rota para baixar um arquivo específico do diretório PDF
app.get('/download/:arquivo', (req, res) => {
  const { arquivo } = req.params;
  const filePath = join(pdfDirectory, arquivo);

  // Lógica para enviar o arquivo para o cliente como um download
  res.download(filePath, arquivo);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
