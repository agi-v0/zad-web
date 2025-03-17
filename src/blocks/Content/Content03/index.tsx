'use client'
import { cn } from '@/utilities/ui'
import React, { useState } from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock } from '@/payload-types'

import { CMSLink } from '../../../components/Link'
import { Media } from '@/components/Media'

export const Content03: React.FC<ContentBlock> = (props) => {
  const { richText, list } = props
  const [activeAccordionId, setActiveAccordionId] = useState<string>(
    list && list.length > 0 && list?.[0]?.id ? list[0].id : '',
  )

  return (
    <div className="bg-zad-beige-light w-full">
      <div className="flex flex-col">
        {richText && (
          <div className="section pt-site w-full">
            <RichText className="m-0" data={richText} enableGutter={false} />
          </div>
        )}
        {list && (
          <div className="section py-site gap-site flex w-full flex-row">
            <div className="flex w-full flex-col space-y-2">
              {list.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={cn(
                    'flex w-full flex-col gap-2 rounded-lg p-3',
                    activeAccordionId === item.id && 'bg-zinc-100 dark:bg-zinc-800',
                  )}
                  onClick={() => setActiveAccordionId(String(item.id))}
                >
                  <h3 className="text-foreground-primary text-body-l text-start font-bold">
                    {item.heading}
                  </h3>
                  {item.content && (
                    <RichText className="m-0" data={item.content} enableGutter={false} />
                  )}
                </button>
              ))}
            </div>
            <div className="relative h-auto w-full">
              <Media
                key={list.find((item) => item.id === activeAccordionId)?.id}
                imgClassName="w-full h-auto rounded-3xl"
                resource={list.find((item) => item.id === activeAccordionId)?.media}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
