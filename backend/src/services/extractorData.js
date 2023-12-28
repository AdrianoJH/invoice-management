import pdf from 'pdf-parse';
import { promises as fs } from 'fs';
import path from 'path';

// Função assíncrona que processa todos os arquivos PDF em um diretório
async function processAllPDFsInDirectory(directoryPath) {
    try {
        // Lista todos os arquivos no diretório especificado
        const pdfFiles = await fs.readdir(directoryPath);
        
        // Array que armazenará os dados extraídos de cada PDF
        const pdfDataArray = [];

        // Itera sobre cada arquivo PDF no diretório
        for (const pdfFile of pdfFiles) {
            const pdfPath = path.join(directoryPath, pdfFile);

            try {
                // Lê o conteúdo do arquivo PDF
                const pdfBuffer = await fs.readFile(pdfPath);

                // Extrai os dados do PDF usando a função extractDataFromPDF
                const extractedData = await extractDataFromPDF(pdfBuffer);

                // Adiciona os dados extraídos ao array
                pdfDataArray.push({ fileName: pdfFile, data: extractedData });
            } catch (error) {
                console.error(`Erro ao processar o arquivo ${pdfPath}:`, error);
            }
        }

        // Retorna o array contendo os dados extraídos de todos os PDFs
        return pdfDataArray;
    } catch (error) {
        console.error('Erro ao listar arquivos PDF:', error);
        throw new Error('Erro ao processar arquivos PDF');
    }
}

// Função assíncrona que extrai dados de um buffer de PDF
async function extractDataFromPDF(pdfBuffer) {
    try {
        // Converte o buffer do PDF para texto
        const pdfText = await pdf(pdfBuffer);

        // Processa o texto extraído usando a função processExtractedText
        return processExtractedText(pdfText.text);
    } catch (error) {
        console.error('Erro ao extrair dados do PDF:', error);
        throw new Error('Erro ao extrair dados do PDF');
    }
}

// Função que processa o texto extraído de um PDF
function processExtractedText(text) {
    // Divide o texto em linhas
    const lines = text.split('\n');

    // Variáveis que armazenarão informações específicas
    let clientInfo, referenceInfo, eletricEnergyInfo, sceeInfo, compensatedInfo, contribIlumPublica;

    // Itera sobre cada linha do texto
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Verifica se a linha contém informações específicas e as extrai
        if (line.includes("Nº DO CLIENTE")) {
            clientInfo = extractInfo(lines, i);
        } else if (line.includes("Referente a")) {
            referenceInfo = extractInfo(lines, i);
        } else if (line.includes("Energia Elétrica")) {
            eletricEnergyInfo = extractInfo(lines, i + 2);
        } else if (line.includes("Energia SCEE s/ ICMS")) {
            sceeInfo = extractInfo(lines, i + 2);
        } else if (line.includes("Energia compensada GD I")) {
            compensatedInfo = extractInfo(lines, i + 2);
        } else if (line.includes("Contrib Ilum Publica Municipal")) {
            // Modificado para manter o valor como string
            const match = line.match(/(\d+,\d{2})/);
            contribIlumPublica = match ? match[1] : null;
        }
    }

    // Verifica se todas as informações necessárias foram encontradas
    if (!clientInfo || !referenceInfo || !eletricEnergyInfo || !sceeInfo || !compensatedInfo || contribIlumPublica === undefined) {
        console.error('Padrão não encontrado no texto extraído.');
        return null;
    }

    // Retorna um objeto contendo as informações extraídas
    return {
        numeroCliente: clientInfo[0],
        mesReferencia: referenceInfo[0],
        energiaEletrica: eletricEnergyInfo,
        energiaSCEE: sceeInfo,
        compensadaGDI: compensatedInfo,
        contribIlumPublicaMunicipal: contribIlumPublica,
    };
}

// Função que extrai informações de linhas específicas do texto
function extractInfo(lines, index) {
    const info = [];

    // Itera sobre as linhas a partir do índice especificado
    for (let j = index + 1; j < lines.length; j++) {
        // Obtém valores não vazios da linha
        const values = lines[j].match(/\S+/g);

        // Adiciona os valores ao array de informações
        if (values && values.length > 0) {
            info.push(...values);
        } else {
            break;
        }
    }

    // Retorna o array de informações extraídas
    return info;
}

// Exporta a função principal para ser utilizada em outros módulos
export { processAllPDFsInDirectory };
