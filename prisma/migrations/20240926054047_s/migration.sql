/*
  Warnings:

  - The primary key for the `categoryArtikel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `postArtikel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `categoryArtikelId` column on the `postArtikel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `IdProductArtikel` on the `imageProductArtikel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "imageProductArtikel" DROP CONSTRAINT "imageProductArtikel_IdProductArtikel_fkey";

-- DropForeignKey
ALTER TABLE "postArtikel" DROP CONSTRAINT "postArtikel_categoryArtikelId_fkey";

-- AlterTable
ALTER TABLE "categoryArtikel" DROP CONSTRAINT "categoryArtikel_pkey",
ADD CONSTRAINT "categoryArtikel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "imageProductArtikel" DROP COLUMN "IdProductArtikel",
ADD COLUMN     "IdProductArtikel" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "postArtikel" DROP CONSTRAINT "postArtikel_pkey",
DROP COLUMN "categoryArtikelId",
ADD COLUMN     "categoryArtikelId" INTEGER,
ADD CONSTRAINT "postArtikel_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "imageProductArtikel_IdProductArtikel_idx" ON "imageProductArtikel"("IdProductArtikel");

-- AddForeignKey
ALTER TABLE "postArtikel" ADD CONSTRAINT "postArtikel_categoryArtikelId_fkey" FOREIGN KEY ("categoryArtikelId") REFERENCES "categoryArtikel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageProductArtikel" ADD CONSTRAINT "imageProductArtikel_IdProductArtikel_fkey" FOREIGN KEY ("IdProductArtikel") REFERENCES "postArtikel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
