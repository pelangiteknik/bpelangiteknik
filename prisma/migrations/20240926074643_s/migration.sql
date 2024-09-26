-- DropIndex
DROP INDEX "listProduct_productType_idx";

-- AlterTable
ALTER TABLE "listProduct" ALTER COLUMN "productType" DROP NOT NULL;
