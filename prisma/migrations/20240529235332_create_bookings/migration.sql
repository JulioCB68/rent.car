-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bookings_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
