import type React from 'react'
import * as RemixIcons from '@remixicon/react'

// Create a mapping of kebab-case names to icon components
export const iconMap: Record<string, React.ComponentType<any>> = {}

// Populate the map
Object.entries(RemixIcons).forEach(([pascalName, component]) => {
  // Convert PascalCase to kebab-case
  // e.g., 'RiHeartFill' -> 'heart-fill'
  if (pascalName.startsWith('Ri')) {
    const kebabName = pascalName
      .slice(2) // Remove 'Ri' prefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert hyphens
      .toLowerCase()

    iconMap[kebabName] = component
  }
})
