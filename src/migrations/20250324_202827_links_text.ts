import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "hero_link_text" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_link_text" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_link_text";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_link_text";`)
}
