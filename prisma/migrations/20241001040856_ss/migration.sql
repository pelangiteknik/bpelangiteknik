/*
  Warnings:

  - A unique constraint covering the columns `[slugCategory]` on the table `categoryArtikel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slugCategory]` on the table `categoryProduct` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slugCategory` to the `categoryArtikel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slugCategory` to the `categoryProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categoryArtikel" ADD COLUMN     "slugCategory" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "categoryProduct" ADD COLUMN     "slugCategory" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categoryArtikel_slugCategory_key" ON "categoryArtikel"("slugCategory");

-- CreateIndex
CREATE UNIQUE INDEX "categoryProduct_slugCategory_key" ON "categoryProduct"("slugCategory");
