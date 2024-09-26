-- CreateTable
CREATE TABLE "categoryProduct" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "urlYoutube" TEXT,
    "title" TEXT,
    "desc" TEXT,
    "tags" TEXT,

    CONSTRAINT "categoryProduct_pkey" PRIMARY KEY ("category")
);

-- CreateTable
CREATE TABLE "listProduct" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "slugProduct" TEXT NOT NULL,
    "saveDraf" BOOLEAN NOT NULL DEFAULT true,
    "descProduct" TEXT,
    "productName" TEXT,
    "stockProduct" INTEGER,
    "descMetaProduct" TEXT,
    "viewProduct" INTEGER,
    "productKategori" TEXT NOT NULL,
    "subKategoriProduct" TEXT,
    "productType" TEXT NOT NULL,
    "tagProduct" JSONB,
    "productPrice" BIGINT,
    "productDiscount" INTEGER,
    "productPriceFinal" BIGINT,
    "urlYoutube" TEXT,

    CONSTRAINT "listProduct_pkey" PRIMARY KEY ("slugProduct")
);

-- CreateTable
CREATE TABLE "specProduct" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "phase_spec" TEXT,
    "frequency_spec" TEXT,
    "gensetPower_spec" TEXT,
    "ratedPower_spec" TEXT,
    "maxPower_spec" TEXT,
    "ratedACVoltage_spec" TEXT,
    "starting_spec" TEXT,
    "fuelConsumption_spec" TEXT,
    "weight_spec" INTEGER,
    "dimension_spec" TEXT,
    "IdProduct" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "imageProduct" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "asset_id" TEXT,
    "public_id" TEXT,
    "version" INTEGER,
    "version_id" TEXT,
    "signature" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "format" TEXT,
    "resource_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tags" JSONB,
    "bytes" INTEGER,
    "type" TEXT,
    "etag" TEXT,
    "placeholder" BOOLEAN,
    "url" TEXT,
    "secure_url" TEXT,
    "asset_folder" TEXT,
    "display_name" TEXT,
    "original_filename" TEXT,
    "api_key" TEXT,
    "IdProduct" TEXT NOT NULL,

    CONSTRAINT "imageProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postArtikel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "description" TEXT,
    "tags" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "saveDraf" BOOLEAN NOT NULL DEFAULT true,
    "categoryArtikelId" TEXT,

    CONSTRAINT "postArtikel_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "imageProductArtikel" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "asset_id" TEXT,
    "public_id" TEXT,
    "version" INTEGER,
    "version_id" TEXT,
    "signature" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "format" TEXT,
    "resource_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tags" JSONB,
    "bytes" INTEGER,
    "type" TEXT,
    "etag" TEXT,
    "placeholder" BOOLEAN,
    "url" TEXT,
    "secure_url" TEXT,
    "asset_folder" TEXT,
    "display_name" TEXT,
    "original_filename" TEXT,
    "api_key" TEXT,
    "IdProductArtikel" TEXT NOT NULL,

    CONSTRAINT "imageProductArtikel_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "categoryProduct_category_key" ON "categoryProduct"("category");

-- CreateIndex
CREATE UNIQUE INDEX "listProduct_slugProduct_key" ON "listProduct"("slugProduct");

-- CreateIndex
CREATE INDEX "listProduct_productType_idx" ON "listProduct"("productType");

-- CreateIndex
CREATE UNIQUE INDEX "specProduct_IdProduct_key" ON "specProduct"("IdProduct");

-- CreateIndex
CREATE UNIQUE INDEX "imageProduct_asset_id_key" ON "imageProduct"("asset_id");

-- CreateIndex
CREATE UNIQUE INDEX "imageProduct_public_id_key" ON "imageProduct"("public_id");

-- CreateIndex
CREATE INDEX "imageProduct_IdProduct_idx" ON "imageProduct"("IdProduct");

-- CreateIndex
CREATE UNIQUE INDEX "postArtikel_slug_key" ON "postArtikel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "imageProductArtikel_asset_id_key" ON "imageProductArtikel"("asset_id");

-- CreateIndex
CREATE UNIQUE INDEX "imageProductArtikel_public_id_key" ON "imageProductArtikel"("public_id");

-- CreateIndex
CREATE INDEX "imageProductArtikel_IdProductArtikel_idx" ON "imageProductArtikel"("IdProductArtikel");

-- CreateIndex
CREATE UNIQUE INDEX "categoryArtikel_category_key" ON "categoryArtikel"("category");

-- AddForeignKey
ALTER TABLE "listProduct" ADD CONSTRAINT "listProduct_productKategori_fkey" FOREIGN KEY ("productKategori") REFERENCES "categoryProduct"("category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specProduct" ADD CONSTRAINT "specProduct_IdProduct_fkey" FOREIGN KEY ("IdProduct") REFERENCES "listProduct"("slugProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageProduct" ADD CONSTRAINT "imageProduct_IdProduct_fkey" FOREIGN KEY ("IdProduct") REFERENCES "listProduct"("slugProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postArtikel" ADD CONSTRAINT "postArtikel_categoryArtikelId_fkey" FOREIGN KEY ("categoryArtikelId") REFERENCES "categoryArtikel"("category") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageProductArtikel" ADD CONSTRAINT "imageProductArtikel_IdProductArtikel_fkey" FOREIGN KEY ("IdProductArtikel") REFERENCES "postArtikel"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
