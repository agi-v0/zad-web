import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DO $$ BEGIN
    DROP TABLE IF EXISTS "pages_blocks_logo_block_list" CASCADE;
    DROP TABLE IF EXISTS "_pages_v_blocks_logo_block_list" CASCADE;
  EXCEPTION
    WHEN undefined_table THEN null;
  END $$;

  ALTER TABLE "pages_rels" ADD COLUMN IF NOT EXISTS "media_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN IF NOT EXISTS "media_id" integer;
  ALTER TABLE "forms_blocks_select" ADD COLUMN IF NOT EXISTS "placeholder" varchar;

  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_media_id_idx" ON "_pages_v_rels" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_logo_block_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_logo_block_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_media_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_media_fk";
  
  DROP INDEX IF EXISTS "pages_rels_media_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_media_id_idx";
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_logo_block_list" ADD CONSTRAINT "pages_blocks_logo_block_list_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_logo_block_list" ADD CONSTRAINT "pages_blocks_logo_block_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_logo_block_list" ADD CONSTRAINT "_pages_v_blocks_logo_block_list_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_logo_block_list" ADD CONSTRAINT "_pages_v_blocks_logo_block_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_logo_block_list_order_idx" ON "pages_blocks_logo_block_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_logo_block_list_parent_id_idx" ON "pages_blocks_logo_block_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_logo_block_list_media_idx" ON "pages_blocks_logo_block_list" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_logo_block_list_order_idx" ON "_pages_v_blocks_logo_block_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_logo_block_list_parent_id_idx" ON "_pages_v_blocks_logo_block_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_logo_block_list_media_idx" ON "_pages_v_blocks_logo_block_list" USING btree ("media_id");
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "media_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "media_id";
  ALTER TABLE "forms_blocks_select" DROP COLUMN IF EXISTS "placeholder";`)
}
