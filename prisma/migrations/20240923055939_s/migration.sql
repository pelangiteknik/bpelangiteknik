-- DropIndex
DROP INDEX "imageProduct_IdProduct_idx";

-- AlterTable
ALTER TABLE "imageProduct" ADD COLUMN     "IdProductArtikel" TEXT NOT NULL DEFAULT 'ok';

-- CreateIndex
CREATE INDEX "imageProduct_IdProduct_IdProductArtikel_idx" ON "imageProduct"("IdProduct", "IdProductArtikel");

-- AddForeignKey
ALTER TABLE "imageProduct" ADD CONSTRAINT "imageProduct_IdProductArtikel_fkey" FOREIGN KEY ("IdProductArtikel") REFERENCES "postArtikel"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
