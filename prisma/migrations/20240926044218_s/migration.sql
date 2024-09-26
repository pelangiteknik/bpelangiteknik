/*
  Warnings:

  - The primary key for the `categoryProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `productKategori` on the `listProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "listProduct" DROP CONSTRAINT "listProduct_productKategori_fkey";

-- AlterTable
ALTER TABLE "categoryProduct" DROP CONSTRAINT "categoryProduct_pkey",
ADD CONSTRAINT "categoryProduct_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "listProduct" DROP COLUMN "productKategori",
ADD COLUMN     "productKategori" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "listProduct" ADD CONSTRAINT "listProduct_productKategori_fkey" FOREIGN KEY ("productKategori") REFERENCES "categoryProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
