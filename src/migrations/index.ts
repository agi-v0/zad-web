import * as migration_20250321_213103_init from './20250321_213103_init';
import * as migration_20250322_103632_logos from './20250322_103632_logos';

export const migrations = [
  {
    up: migration_20250321_213103_init.up,
    down: migration_20250321_213103_init.down,
    name: '20250321_213103_init',
  },
  {
    up: migration_20250322_103632_logos.up,
    down: migration_20250322_103632_logos.down,
    name: '20250322_103632_logos'
  },
];
