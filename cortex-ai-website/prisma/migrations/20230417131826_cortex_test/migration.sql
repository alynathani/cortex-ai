-- CreateTable
CREATE TABLE "Tool" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "downloads" INTEGER NOT NULL,
    "imageLink" TEXT,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);
