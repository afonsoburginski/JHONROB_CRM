/*
  Warnings:

  - You are about to drop the column `inputOutputs` on the `Propose` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Propose" DROP COLUMN "inputOutputs",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT '';
