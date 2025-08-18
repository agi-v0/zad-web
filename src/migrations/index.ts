import * as migration_20250321_213103_init from './20250321_213103_init';
import * as migration_20250322_103632_logos from './20250322_103632_logos';
import * as migration_20250324_202827_links_text from './20250324_202827_links_text';
import * as migration_20250818_083500 from './20250818_083500';

export const migrations = [
  {
    up: migration_20250321_213103_init.up,
    down: migration_20250321_213103_init.down,
    name: '20250321_213103_init',
  },
  {
    up: migration_20250322_103632_logos.up,
    down: migration_20250322_103632_logos.down,
    name: '20250322_103632_logos',
  },
  {
    up: migration_20250324_202827_links_text.up,
    down: migration_20250324_202827_links_text.down,
    name: '20250324_202827_links_text',
  },
  {
    up: migration_20250818_083500.up,
    down: migration_20250818_083500.down,
    name: '20250818_083500'
  },
];
