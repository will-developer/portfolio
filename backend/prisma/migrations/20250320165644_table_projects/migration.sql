-- AlterTable
ALTER TABLE "Technology" RENAME CONSTRAINT "Tecnologia_pkey" TO "Technology_pkey";

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagens" TEXT[],
    "nivel" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "repositorio" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
