import type React from 'react'
import { iconMap } from '@/utilities/iconMap'

interface StaticIconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

export const Icon: React.FC<StaticIconProps> = ({ name, size = 24, color, className = '' }) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`)
    return null
  }

  return <IconComponent size={size} color={color} className={className} />
}
