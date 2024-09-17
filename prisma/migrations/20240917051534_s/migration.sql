-- CreateTable
CREATE TABLE `listProduct` (
    `start` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `end` DATETIME(3) NOT NULL,
    `slugProduct` VARCHAR(191) NOT NULL,
    `saveDraf` BOOLEAN NOT NULL DEFAULT true,
    `descProduct` VARCHAR(191) NULL,
    `productName` VARCHAR(191) NULL,
    `stockProduct` INTEGER NULL,
    `productType` VARCHAR(191) NULL,
    `subProductType` VARCHAR(191) NULL,
    `tagProduct` JSON NULL,
    `productPrice` BIGINT NULL,
    `productDiscount` INTEGER NULL,
    `productPriceFinal` BIGINT NULL,

    UNIQUE INDEX `listProduct_slugProduct_key`(`slugProduct`),
    PRIMARY KEY (`slugProduct`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specProduct` (
    `phase_spec` VARCHAR(191) NULL,
    `frequency_spec` VARCHAR(191) NULL,
    `gensetPower_spec` VARCHAR(191) NULL,
    `ratedPower_spec` VARCHAR(191) NULL,
    `maxPower_spec` VARCHAR(191) NULL,
    `ratedACVoltage_spec` VARCHAR(191) NULL,
    `starting_spec` VARCHAR(191) NULL,
    `fuelConsumption_spec` VARCHAR(191) NULL,
    `weight_spec` VARCHAR(191) NULL,
    `dimension_spec` VARCHAR(191) NULL,
    `IdProduct` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `specProduct_IdProduct_key`(`IdProduct`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imageProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `asset_id` VARCHAR(191) NULL,
    `public_id` VARCHAR(191) NULL,
    `version` INTEGER NULL,
    `version_id` VARCHAR(191) NULL,
    `signature` VARCHAR(191) NULL,
    `width` INTEGER NULL,
    `height` INTEGER NULL,
    `format` VARCHAR(191) NULL,
    `resource_type` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tags` JSON NULL,
    `bytes` INTEGER NULL,
    `type` VARCHAR(191) NULL,
    `etag` VARCHAR(191) NULL,
    `placeholder` BOOLEAN NULL,
    `url` VARCHAR(191) NULL,
    `secure_url` VARCHAR(191) NULL,
    `asset_folder` VARCHAR(191) NULL,
    `display_name` VARCHAR(191) NULL,
    `original_filename` VARCHAR(191) NULL,
    `api_key` VARCHAR(191) NULL,
    `IdProduct` VARCHAR(191) NOT NULL,

    INDEX `imageProduct_IdProduct_idx`(`IdProduct`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `specProduct` ADD CONSTRAINT `specProduct_IdProduct_fkey` FOREIGN KEY (`IdProduct`) REFERENCES `listProduct`(`slugProduct`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imageProduct` ADD CONSTRAINT `imageProduct_IdProduct_fkey` FOREIGN KEY (`IdProduct`) REFERENCES `listProduct`(`slugProduct`) ON DELETE RESTRICT ON UPDATE CASCADE;
