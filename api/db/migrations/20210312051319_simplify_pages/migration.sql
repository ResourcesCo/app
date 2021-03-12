/*
  Warnings:

  - You are about to drop the column `computed` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `meta` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `computed` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `meta` on the `Page` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_userId_fkey";

-- DropForeignKey
ALTER TABLE "PageLocation" DROP CONSTRAINT "PageLocation_pageId_fkey";

-- DropForeignKey
ALTER TABLE "PageRole" DROP CONSTRAINT "PageRole_pageId_fkey";

-- DropForeignKey
ALTER TABLE "PageRole" DROP CONSTRAINT "PageRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "PageRole" DROP CONSTRAINT "PageRole_userId_fkey";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "computed",
DROP COLUMN "meta",
ADD COLUMN     "data" JSONB;

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "computed",
DROP COLUMN "meta",
ADD COLUMN     "data" JSONB;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageLocation" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageRole" ADD FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageRole" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageRole" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
