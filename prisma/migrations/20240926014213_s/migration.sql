/*
  Warnings:

  - The primary key for the `categoryProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "categoryProduct" DROP CONSTRAINT "categoryProduct_pkey",
ADD COLUMN     "image" TEXT,
ADD CONSTRAINT "categoryProduct_pkey" PRIMARY KEY ("category");

-- AlterTable
ALTER TABLE "postArtikel" ADD COLUMN     "categoryArtikelId" TEXT;

-- CreateTable
CREATE TABLE "categoryArtikel" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "urlYoutube" TEXT,
    "title" TEXT,
    "desc" TEXT,
    "tags" TEXT,

    CONSTRAINT "categoryArtikel_pkey" PRIMARY KEY ("category")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoryArtikel_category_key" ON "categoryArtikel"("category");

-- AddForeignKey
ALTER TABLE "postArtikel" ADD CONSTRAINT "postArtikel_categoryArtikelId_fkey" FOREIGN KEY ("categoryArtikelId") REFERENCES "categoryArtikel"("category") ON DELETE SET NULL ON UPDATE CASCADE;
