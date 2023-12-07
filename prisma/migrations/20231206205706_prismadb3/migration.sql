-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
ALTER TABLE "User" ADD COLUMN     "image" text NOT NULL DEFAULT '';
ALTER TABLE "User" ADD COLUMN     "password" text NOT NULL DEFAULT '';
