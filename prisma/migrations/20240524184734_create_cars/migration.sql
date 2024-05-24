-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "up" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "typeCambium" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "strength" TEXT NOT NULL
);
