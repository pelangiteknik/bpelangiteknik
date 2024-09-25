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

-- CreateIndex
CREATE UNIQUE INDEX "imageProductArtikel_asset_id_key" ON "imageProductArtikel"("asset_id");

-- CreateIndex
CREATE UNIQUE INDEX "imageProductArtikel_public_id_key" ON "imageProductArtikel"("public_id");

-- CreateIndex
CREATE INDEX "imageProductArtikel_IdProductArtikel_idx" ON "imageProductArtikel"("IdProductArtikel");

-- AddForeignKey
ALTER TABLE "imageProductArtikel" ADD CONSTRAINT "imageProductArtikel_IdProductArtikel_fkey" FOREIGN KEY ("IdProductArtikel") REFERENCES "postArtikel"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
