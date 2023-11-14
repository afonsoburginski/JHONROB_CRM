-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER,
    "productId" INTEGER NOT NULL,
    "inputId" INTEGER NOT NULL,
    "outputId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Capacity" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "model_id" INTEGER NOT NULL,

    CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Height" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "capacity_id" INTEGER NOT NULL,

    CONSTRAINT "Height_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputOutput" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "InputOutput_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_inputId_fkey" FOREIGN KEY ("inputId") REFERENCES "InputOutput"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_outputId_fkey" FOREIGN KEY ("outputId") REFERENCES "InputOutput"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Capacity" ADD CONSTRAINT "Capacity_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "Model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Height" ADD CONSTRAINT "Height_capacity_id_fkey" FOREIGN KEY ("capacity_id") REFERENCES "Capacity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
