/*
  Warnings:

  - The `weight_spec` column on the `specProduct` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "specProduct" DROP COLUMN "weight_spec",
ADD COLUMN     "weight_spec" INTEGER;
