import * as migration_20250321_213103_init from './20250321_213103_init';

export const migrations = [
  {
    up: migration_20250321_213103_init.up,
    down: migration_20250321_213103_init.down,
    name: '20250321_213103_init'
  },
];
