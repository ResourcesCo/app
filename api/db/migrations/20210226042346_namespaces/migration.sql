/*
  Warnings:

  - You are about to drop the column `path` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[folder,name]` on the table `Page`. If there are existing duplicate values, the migration will fail.
  - Added the required column `title` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Page.path_unique";

-- DropIndex
DROP INDEX "Page.name_index";

-- DropIndex
DROP INDEX "User.email_index";

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_userId_fkey";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "metadata",
ADD COLUMN     "folder" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "meta" TEXT NOT NULL DEFAULT E'';

UPDATE "Action" SET "title" = "name";
UPDATE "Action" SET "name" = "path";
ALTER TABLE "Action" ALTER COLUMN "title" DROP DEFAULT;
ALTER TABLE "Action" DROP COLUMN "path";

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "metadata",
ADD COLUMN     "folder" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "meta" TEXT NOT NULL DEFAULT E'';

UPDATE "Page" SET "title" = "name";
UPDATE "Page" SET "name" = "path";
ALTER TABLE "Page" ALTER COLUMN "title" DROP DEFAULT;
ALTER TABLE "Page" DROP COLUMN "path";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "username" TEXT,
ADD COLUMN     "admin" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "bot" SET DEFAULT false;

-- CreateTable
CREATE TABLE "UserPageRole" (
    "id" UUID NOT NULL,
    "role" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "pageId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page.folder_name_unique" ON "Page"("folder", "name");

-- AddForeignKey
ALTER TABLE "UserPageRole" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPageRole" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
