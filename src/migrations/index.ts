import * as migration_20250317_145509 from './20250317_145509';

export const migrations = [
  {
    up: migration_20250317_145509.up,
    down: migration_20250317_145509.down,
    name: '20250317_145509'
  },
];
