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
    "productType" TEXT,
    "subProductType" TEXT,
    "tagProduct" JSONB,
    "productPrice" BIGINT,
    "productDiscount" INTEGER,
    "productPriceFinal" BIGINT,

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

-- CreateIndex
CREATE UNIQUE INDEX "listProduct_slugProduct_key" ON "listProduct"("slugProduct");

-- CreateIndex
CREATE UNIQUE INDEX "specProduct_IdProduct_key" ON "specProduct"("IdProduct");

-- CreateIndex
CREATE UNIQUE INDEX "imageProduct_asset_id_key" ON "imageProduct"("asset_id");

-- CreateIndex
CREATE UNIQUE INDEX "imageProduct_public_id_key" ON "imageProduct"("public_id");

-- CreateIndex
CREATE INDEX "imageProduct_IdProduct_idx" ON "imageProduct"("IdProduct");

-- AddForeignKey
ALTER TABLE "specProduct" ADD CONSTRAINT "specProduct_IdProduct_fkey" FOREIGN KEY ("IdProduct") REFERENCES "listProduct"("slugProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageProduct" ADD CONSTRAINT "imageProduct_IdProduct_fkey" FOREIGN KEY ("IdProduct") REFERENCES "listProduct"("slugProduct") ON DELETE RESTRICT ON UPDATE CASCADE;
