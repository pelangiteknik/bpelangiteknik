/*
  Warnings:

  - Made the column `productType` on table `listProduct` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "imageProduct_IdProduct_idx";

-- AlterTable
ALTER TABLE "imageProduct" ADD COLUMN     "IdProductArtikel" TEXT NOT NULL DEFAULT 'ok';

-- AlterTable
ALTER TABLE "listProduct" ADD COLUMN     "urlYoutube" TEXT,
ALTER COLUMN "productType" SET NOT NULL;

-- CreateTable
CREATE TABLE "categoryProduct" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "urlYoutube" TEXT,
    "title" TEXT,
    "desc" TEXT,

    CONSTRAINT "categoryProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postArtikel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "description" TEXT,
    "metaTitle" TEXT,
    "tags" JSONB,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "saveDraf" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "postArtikel_pkey" PRIMARY KEY ("slug")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoryProduct_category_key" ON "categoryProduct"("category");

-- CreateIndex
CREATE UNIQUE INDEX "postArtikel_slug_key" ON "postArtikel"("slug");

-- CreateIndex
CREATE INDEX "imageProduct_IdProduct_IdProductArtikel_idx" ON "imageProduct"("IdProduct", "IdProductArtikel");

-- CreateIndex
CREATE INDEX "listProduct_productType_idx" ON "listProduct"("productType");

-- AddForeignKey
ALTER TABLE "listProduct" ADD CONSTRAINT "listProduct_productType_fkey" FOREIGN KEY ("productType") REFERENCES "categoryProduct"("category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageProduct" ADD CONSTRAINT "imageProduct_IdProductArtikel_fkey" FOREIGN KEY ("IdProductArtikel") REFERENCES "postArtikel"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
