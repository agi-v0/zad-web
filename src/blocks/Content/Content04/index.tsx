import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock } from '@/payload-types'

import { CMSLink } from '../../../components/Link'
import { Media } from '@/components/Media'

export const Content04: React.FC<ContentBlock> = (props) => {
  const { richText, list } = props

  return (
    <div className="w-full bg-background">
      <div className="flex flex-col">
        {richText && (
          <div className="section w-full pt-site">
            <RichText
              className="prose-p:text-body-large -mx-auto max-w-8xl text-center prose-headings:text-zad-green"
              data={richText}
              enableGutter={false}
            />
          </div>
        )}
        {list && (
          <div className="section flex w-full flex-col gap-site py-site">
            {list.map((item) => (
              <div key={item.id} className="grid grid-cols-1 gap-xl lg:grid-cols-2">
                <div className="flex flex-col items-start gap-4">
                  {item.tag && (
                    <span className="rounded-full bg-zad-lime px-3 py-1 text-sm font-bold">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="text-h3 text-start font-bold">{item.heading}</h3>
                  {item.content && (
                    <RichText
                      className="prose-p:text-body-large m-0"
                      data={item.content}
                      enableGutter={false}
                    />
                  )}
                </div>
                <div className="relative h-auto w-full select-none">
                  <Media
                    className=""
                    imgClassName="w-full rounded-3xl h-auto"
                    resource={item.media}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
