-- CreateTable
CREATE TABLE "ExtractedInformation" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "numeroCliente" TEXT NOT NULL,
    "mesReferencia" TEXT NOT NULL,
    "energiaEletrica" TEXT[],
    "energiaSCEE" TEXT[],
    "compensadaGDI" TEXT[],
    "contribIlumPublicaMunicipal" TEXT NOT NULL,

    CONSTRAINT "ExtractedInformation_pkey" PRIMARY KEY ("id")
);
