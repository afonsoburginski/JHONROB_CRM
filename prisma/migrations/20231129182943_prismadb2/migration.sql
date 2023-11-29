/*
  Warnings:

  - You are about to drop the column `capacity` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `groups` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `input` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `output` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `power` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `Propose` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Propose` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Propose" DROP COLUMN "capacity",
DROP COLUMN "groups",
DROP COLUMN "height",
DROP COLUMN "input",
DROP COLUMN "model",
DROP COLUMN "output",
DROP COLUMN "power",
DROP COLUMN "product",
DROP COLUMN "type";

-- CreateTable
CREATE TABLE "ProductSelection" (
    "id" SERIAL NOT NULL,
    "groups" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "proposeId" INTEGER NOT NULL,

    CONSTRAINT "ProductSelection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductSelection" ADD CONSTRAINT "ProductSelection_proposeId_fkey" FOREIGN KEY ("proposeId") REFERENCES "Propose"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
