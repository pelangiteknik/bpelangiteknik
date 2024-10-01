-- AlterTable
ALTER TABLE "categoryArtikel" ADD COLUMN     "icon" TEXT;

-- AlterTable
ALTER TABLE "categoryProduct" ADD COLUMN     "icon" TEXT;

-- CreateTable
CREATE TABLE "cart" (
    "IDCart" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),

    CONSTRAINT "cart_pkey" PRIMARY KEY ("IDCart")
);

-- CreateTable
CREATE TABLE "cartItem" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "cartId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "checkList" BOOLEAN NOT NULL DEFAULT false,
    "note" TEXT,

    CONSTRAINT "cartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formPembelian" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "nama_lengkap_user" VARCHAR(200),
    "alamat_lengkap_user" VARCHAR(200),
    "kode_pos_user" INTEGER,
    "no_hp_user" BIGINT,
    "catatan_pengiriman" VARCHAR(200),
    "FormID" TEXT NOT NULL,

    CONSTRAINT "formPembelian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataPesananItem" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "note" TEXT,
    "productName" TEXT,
    "price" BIGINT,
    "priceOriginal" BIGINT,
    "quantity" INTEGER,
    "methodPayment" TEXT,
    "statusProses" BOOLEAN NOT NULL DEFAULT false,
    "statusKirim" BOOLEAN NOT NULL DEFAULT false,
    "statusSelesai" BOOLEAN NOT NULL DEFAULT false,
    "dataPesananId" INTEGER,

    CONSTRAINT "dataPesananItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataPesanan" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "payment" BOOLEAN NOT NULL DEFAULT false,
    "merchantOrderId" TEXT,
    "reference" TEXT,
    "cartIDCart" TEXT NOT NULL,

    CONSTRAINT "dataPesanan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cart_email_key" ON "cart"("email");

-- CreateIndex
CREATE UNIQUE INDEX "formPembelian_FormID_key" ON "formPembelian"("FormID");

-- CreateIndex
CREATE UNIQUE INDEX "dataPesanan_merchantOrderId_key" ON "dataPesanan"("merchantOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "dataPesanan_reference_key" ON "dataPesanan"("reference");

-- CreateIndex
CREATE INDEX "dataPesanan_cartIDCart_idx" ON "dataPesanan"("cartIDCart");

-- AddForeignKey
ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("IDCart") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "listProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formPembelian" ADD CONSTRAINT "formPembelian_FormID_fkey" FOREIGN KEY ("FormID") REFERENCES "cart"("IDCart") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dataPesananItem" ADD CONSTRAINT "dataPesananItem_dataPesananId_fkey" FOREIGN KEY ("dataPesananId") REFERENCES "dataPesanan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dataPesanan" ADD CONSTRAINT "dataPesanan_cartIDCart_fkey" FOREIGN KEY ("cartIDCart") REFERENCES "cart"("IDCart") ON DELETE RESTRICT ON UPDATE CASCADE;
