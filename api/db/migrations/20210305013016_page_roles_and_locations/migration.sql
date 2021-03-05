/*
  Warnings:

  - You are about to drop the `UserPageRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserPageRole" DROP CONSTRAINT "UserPageRole_pageId_fkey";

-- DropForeignKey
ALTER TABLE "UserPageRole" DROP CONSTRAINT "UserPageRole_userId_fkey";

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_userId_fkey";

-- CreateTable
CREATE TABLE "PageLocation" (
    "id" UUID NOT NULL,
    "location" TEXT NOT NULL,
    "pageId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageRole" (
    "id" UUID NOT NULL,
    "roleId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "pageId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "UserPageRole";

-- CreateIndex
CREATE UNIQUE INDEX "PageLocation.location_unique" ON "PageLocation"("location");

-- CreateIndex
CREATE UNIQUE INDEX "Role.name_unique" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PageRole.userId_pageId_roleId_unique" ON "PageRole"("userId", "pageId", "roleId");

-- AddForeignKey
ALTER TABLE "PageLocation" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageRole" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageRole" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageRole" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
