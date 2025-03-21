import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock } from '@/payload-types'

import { CMSLink } from '../../../components/Link'

export const Content01: React.FC<ContentBlock> = (props) => {
  const { richText, list } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 gap-x-16 gap-y-8 lg:grid-cols-12">
        {list &&
          list.length > 0 &&
          list.map((col, index) => {
            const { link, heading, content, size } = col

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {heading && (
                  <h3 className="text-body-l font-bold text-foreground-primary">{heading}</h3>
                )}
                {content && <RichText data={content} enableGutter={false} />}
                {link && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
