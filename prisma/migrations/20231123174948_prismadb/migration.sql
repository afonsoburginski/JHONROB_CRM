-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Capacity" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "modelId" INTEGER NOT NULL,

    CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Height" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "recommended" BOOLEAN NOT NULL,
    "capacityId" INTEGER NOT NULL,

    CONSTRAINT "Height_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Power" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "recommended" BOOLEAN NOT NULL,
    "heightId" INTEGER NOT NULL,

    CONSTRAINT "Power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputOutput" (
    "id" SERIAL NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,

    CONSTRAINT "InputOutput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Propose" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observation" TEXT,
    "groups" TEXT NOT NULL,
    "inputOutputs" TEXT NOT NULL,
    "equipment" TEXT NOT NULL DEFAULT '',
    "product" TEXT NOT NULL DEFAULT '',
    "model" TEXT NOT NULL DEFAULT '',
    "capacity" TEXT NOT NULL DEFAULT '',
    "height" TEXT NOT NULL DEFAULT '',
    "power" TEXT NOT NULL DEFAULT '',
    "input" TEXT NOT NULL DEFAULT '',
    "output" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Propose_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Capacity" ADD CONSTRAINT "Capacity_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Height" ADD CONSTRAINT "Height_capacityId_fkey" FOREIGN KEY ("capacityId") REFERENCES "Capacity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Power" ADD CONSTRAINT "Power_heightId_fkey" FOREIGN KEY ("heightId") REFERENCES "Height"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
