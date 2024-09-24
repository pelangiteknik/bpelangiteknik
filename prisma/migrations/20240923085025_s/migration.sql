/*
  Warnings:

  - You are about to drop the column `subProductType` on the `listProduct` table. All the data in the column will be lost.
  - Added the required column `productKategori` to the `listProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "listProduct" DROP CONSTRAINT "listProduct_productType_fkey";

-- AlterTable
ALTER TABLE "listProduct" DROP COLUMN "subProductType",
ADD COLUMN     "productKategori" TEXT NOT NULL,
ADD COLUMN     "subKategoriProduct" TEXT;

-- AddForeignKey
ALTER TABLE "listProduct" ADD CONSTRAINT "listProduct_productKategori_fkey" FOREIGN KEY ("productKategori") REFERENCES "categoryProduct"("category") ON DELETE RESTRICT ON UPDATE CASCADE;
