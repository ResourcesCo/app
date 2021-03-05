CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO "Role"
("id", "name")
VALUES
(uuid_generate_v4(), 'superadmin'),
(uuid_generate_v4(), 'admin'),
(uuid_generate_v4(), 'editor'),
(uuid_generate_v4(), 'viewer');

INSERT INTO "PageLocation"
("id", "location", "pageId")
SELECT uuid_generate_v4(), CONCAT("folder", CASE WHEN "folder" = '' THEN '' ELSE '/' END, "name"), "id" FROM "Page";

INSERT INTO "PageLocation"
("id", "location", "pageId")
SELECT uuid_generate_v4(), LOWER(CONCAT("folder", CASE WHEN "folder" = '' THEN '' ELSE '/' END, "name")), "id" FROM "Page"
WHERE LOWER(CONCAT("folder", CASE WHEN "folder" = '' THEN '' ELSE '/' END, "name")) != CONCAT("folder", CASE WHEN "folder" = '' THEN '' ELSE '/' END, "name")
ON CONFLICT DO NOTHING;

INSERT INTO "PageRole"
("id", "pageId", "userId", "roleId")
SELECT uuid_generate_v4(), "pageId", "userId", (SELECT "id" FROM "Role" WHERE "name" = 'admin') FROM "Action"
ON CONFLICT DO NOTHING;
