import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { StatsBlock as StatsBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

export const StatsBlock: React.FC<StatsBlockProps> = (props) => {
  const { caption, list } = props
  return (
    <div className="w-full bg-zad-beige-light">
      <div className="flex flex-col">
        {caption && (
          <div className="section w-full pt-site">
            <RichText className="m-0 text-white" data={caption} enableGutter={false} />
          </div>
        )}
        {list && (
          <div className="section grid w-full grid-cols-1 gap-sm py-site md:grid-cols-2 lg:grid-cols-4">
            {list.map((item) => (
              <div key={item.id} className="flex flex-col items-start gap-4">
                <h3 className="text-h4 whitespace-pre text-start font-bold text-foreground-primary">
                  {item.number}
                  {item.unit && ' ' + item.unit}
                </h3>
                {item.description && (
                  <p className="text-body-l text-start text-foreground-tertiary">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
