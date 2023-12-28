import { PrismaClient } from '@prisma/client';

// Cria uma instância do PrismaClient
const prisma = new PrismaClient();

// Exporta uma função chamada savePDFData que recebe um objeto pdfData como parâmetro
export const savePDFData = async (pdfData) => {
  try {
    // Tenta criar uma nova entrada na tabela 'extractedInformation' no banco de dados
    const savedData = await prisma.extractedInformation.create({
      // Especifica os dados a serem inseridos com base no objeto pdfData fornecido
      data: {
        fileName: pdfData.fileName,
        numeroCliente: pdfData.data.numeroCliente,
        mesReferencia: pdfData.data.mesReferencia,
        energiaEletrica: pdfData.data.energiaEletrica,
        energiaSCEE: pdfData.data.energiaSCEE,
        compensadaGDI: pdfData.data.compensadaGDI,
        contribIlumPublicaMunicipal: pdfData.data.contribIlumPublicaMunicipal,
      },
    });

    // Retorna os dados salvos no banco de dados
    return savedData;
  } catch (error) {
    // Em caso de erro, registra o erro no console e lança uma exceção com uma mensagem personalizada
    console.error('Erro ao salvar dados no banco de dados:', error);
    throw new Error(`Erro ao salvar dados no banco de dados: ${error.message}`);
  } finally {
    // Garante que a conexão com o banco de dados é desconectada, independentemente do resultado da operação
    await prisma.$disconnect();
  }
};
