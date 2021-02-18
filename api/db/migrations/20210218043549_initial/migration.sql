-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bot" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "computed" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "computed" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "pageId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Page.path_unique" ON "Page"("path");

-- CreateIndex
CREATE INDEX "Page.name_index" ON "Page"("name");

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
