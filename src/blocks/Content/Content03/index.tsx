'use client'
import React, { useState } from 'react'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { Icon } from '@iconify-icon/react'
import { CMSLink } from '../../../components/Link'
import { Media } from '@/components/Media'
import type { ContentBlock } from '@/payload-types'
export const Content03: React.FC<ContentBlock> = (props) => {
  const { richText, list } = props

  return (
    <div className="bg-zad-beige-light w-full">
      <div className="flex flex-col">
        {richText && (
          <div className="section pt-site w-full">
            <RichText className="mx-auto text-center" data={richText} enableGutter={false} />
          </div>
        )}
        {list && (
          <div className="section gap-sm py-site grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {list.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-6 rounded-lg">
                {item.icon && (
                  <div className="bg-zad-beige inline-flex w-fit rounded-full p-3">
                    <Icon
                      icon={`ri:${item.icon}`}
                      className="text-foreground-primary text-2xl leading-none"
                    />
                  </div>
                )}
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-h6 text-foreground-primary text-center font-bold">
                    {item.heading}
                  </h3>
                  {item.content && (
                    <RichText
                      className="prose-p:text-body-large m-0 text-center"
                      data={item.content}
                      enableGutter={false}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
