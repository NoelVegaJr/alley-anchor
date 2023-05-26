/*
  Warnings:

  - Made the column `img` on table `MenuItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `MenuItem` MODIFY `img` VARCHAR(191) NOT NULL;
