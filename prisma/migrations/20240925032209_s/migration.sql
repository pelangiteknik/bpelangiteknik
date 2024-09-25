/*
  Warnings:

  - You are about to drop the column `metaTitle` on the `postArtikel` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `postArtikel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "postArtikel" DROP COLUMN "metaTitle",
DROP COLUMN "published";
