/*
  Warnings:

  - You are about to drop the column `IdProductArtikel` on the `imageProduct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "imageProduct" DROP CONSTRAINT "imageProduct_IdProductArtikel_fkey";

-- DropIndex
DROP INDEX "imageProduct_IdProduct_IdProductArtikel_idx";

-- AlterTable
ALTER TABLE "imageProduct" DROP COLUMN "IdProductArtikel";

-- CreateIndex
CREATE INDEX "imageProduct_IdProduct_idx" ON "imageProduct"("IdProduct");
