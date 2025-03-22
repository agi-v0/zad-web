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
    <div className="w-full bg-zad-beige-light">
      <div className="flex flex-col">
        {richText && (
          <div className="section w-full pt-site">
            <RichText className="mx-auto text-center" data={richText} enableGutter={false} />
          </div>
        )}
        {list && (
          <div className="section grid w-full grid-cols-1 gap-sm py-site md:grid-cols-2 lg:grid-cols-4">
            {list.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-6 rounded-lg">
                {item.icon && (
                  <div className="inline-flex w-fit rounded-full bg-zad-beige p-3">
                    <Icon
                      icon={`ri:${item.icon}`}
                      className="text-2xl leading-none text-foreground-primary"
                    />
                  </div>
                )}
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-h6 text-center font-bold text-foreground-primary">
                    {item.heading}
                  </h3>
                  {item.content && (
                    <RichText
                      className="prose-p:text-body-l m-0 text-center"
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
