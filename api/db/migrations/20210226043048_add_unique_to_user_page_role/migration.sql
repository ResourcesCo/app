/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[userId,pageId,role]` on the table `UserPageRole`. If there are existing duplicate values, the migration will fail.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserPageRole" DROP CONSTRAINT "UserPageRole_pageId_fkey";

-- DropForeignKey
ALTER TABLE "UserPageRole" DROP CONSTRAINT "UserPageRole_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "UserPageRole.userId_pageId_role_unique" ON "UserPageRole"("userId", "pageId", "role");

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPageRole" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPageRole" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
