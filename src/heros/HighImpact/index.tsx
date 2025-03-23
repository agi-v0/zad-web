'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page, Media as MediaType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { AnimatedGroup } from '@/components/motion/animated-group'
import { cn } from '@/utilities/ui'
import { InfiniteSlider } from '@/components/motion/infinite-slider'
export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, logos, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('dark')
  // })

  return (
    <div className="bg-zad-green text-white">
      <div className="section relative flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center lg:flex-row">
        <div className="gap-md flex basis-1/2 flex-col items-start overflow-hidden">
          {richText && (
            <RichText
              className="prose-p:text-body-large prose-invert"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 md:justify-center">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} size="lg" />
                  </li>
                )
              })}
            </ul>
          )}
          {logos && (
            <InfiniteSlider gap={24} speed={56} reverse>
              {logos.map((item, index) => (
                <Media key={index} imgClassName={cn('h-10 w-auto')} resource={item} />
              ))}
            </InfiniteSlider>
          )}
        </div>
        <div className="aspect-square h-auto w-full basis-1/2 select-none">
          {media && typeof media === 'object' && (
            <Media imgClassName="z-10 object-cover" priority resource={media} />
          )}
        </div>
      </div>
    </div>
  )
}
