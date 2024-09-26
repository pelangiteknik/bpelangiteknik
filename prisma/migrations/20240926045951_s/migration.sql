/*
  Warnings:

  - The primary key for the `listProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `IdProduct` on the `imageProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `IdProduct` on the `specProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "imageProduct" DROP CONSTRAINT "imageProduct_IdProduct_fkey";

-- DropForeignKey
ALTER TABLE "specProduct" DROP CONSTRAINT "specProduct_IdProduct_fkey";

-- AlterTable
ALTER TABLE "imageProduct" DROP COLUMN "IdProduct",
ADD COLUMN     "IdProduct" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "listProduct" DROP CONSTRAINT "listProduct_pkey",
ADD CONSTRAINT "listProduct_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "specProduct" DROP COLUMN "IdProduct",
ADD COLUMN     "IdProduct" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "imageProduct_IdProduct_idx" ON "imageProduct"("IdProduct");

-- CreateIndex
CREATE UNIQUE INDEX "specProduct_IdProduct_key" ON "specProduct"("IdProduct");

-- AddForeignKey
ALTER TABLE "specProduct" ADD CONSTRAINT "specProduct_IdProduct_fkey" FOREIGN KEY ("IdProduct") REFERENCES "listProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageProduct" ADD CONSTRAINT "imageProduct_IdProduct_fkey" FOREIGN KEY ("IdProduct") REFERENCES "listProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
