/*
  Warnings:

  - Made the column `categoryArtikelId` on table `postArtikel` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "postArtikel" DROP CONSTRAINT "postArtikel_categoryArtikelId_fkey";

-- AlterTable
ALTER TABLE "postArtikel" ALTER COLUMN "categoryArtikelId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "postArtikel" ADD CONSTRAINT "postArtikel_categoryArtikelId_fkey" FOREIGN KEY ("categoryArtikelId") REFERENCES "categoryArtikel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
