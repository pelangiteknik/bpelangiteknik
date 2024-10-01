/*
  Warnings:

  - You are about to drop the column `cartIDCart` on the `dataPesanan` table. All the data in the column will be lost.
  - You are about to drop the column `FormID` on the `formPembelian` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cartID]` on the table `formPembelian` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cartID` to the `dataPesanan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartID` to the `formPembelian` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dataPesanan" DROP CONSTRAINT "dataPesanan_cartIDCart_fkey";

-- DropForeignKey
ALTER TABLE "formPembelian" DROP CONSTRAINT "formPembelian_FormID_fkey";

-- DropIndex
DROP INDEX "dataPesanan_cartIDCart_idx";

-- DropIndex
DROP INDEX "formPembelian_FormID_key";

-- AlterTable
ALTER TABLE "dataPesanan" DROP COLUMN "cartIDCart",
ADD COLUMN     "cartID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "dataPesananItem" ADD COLUMN     "image" TEXT,
ADD COLUMN     "merchantOrderId" TEXT,
ADD COLUMN     "slugProduct" TEXT,
ALTER COLUMN "statusProses" SET DEFAULT true;

-- AlterTable
ALTER TABLE "formPembelian" DROP COLUMN "FormID",
ADD COLUMN     "cartID" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ongkosKirim" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "productName" TEXT,
    "price" BIGINT,
    "quantity" INTEGER,
    "cartID" TEXT NOT NULL,

    CONSTRAINT "ongkosKirim_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ongkosKirim_cartID_key" ON "ongkosKirim"("cartID");

-- CreateIndex
CREATE INDEX "dataPesanan_cartID_idx" ON "dataPesanan"("cartID");

-- CreateIndex
CREATE UNIQUE INDEX "formPembelian_cartID_key" ON "formPembelian"("cartID");

-- AddForeignKey
ALTER TABLE "formPembelian" ADD CONSTRAINT "formPembelian_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "cart"("IDCart") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ongkosKirim" ADD CONSTRAINT "ongkosKirim_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "cart"("IDCart") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dataPesanan" ADD CONSTRAINT "dataPesanan_cartID_fkey" FOREIGN KEY ("cartID") REFERENCES "cart"("IDCart") ON DELETE RESTRICT ON UPDATE CASCADE;
