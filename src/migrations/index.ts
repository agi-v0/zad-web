import * as migration_20250321_145510 from './20250321_145510'

export const migrations = [
  {
    up: migration_20250321_145510.up,
    down: migration_20250321_145510.down,
    name: '20250321_145510',
  },
]
