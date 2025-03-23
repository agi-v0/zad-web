'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('dark')
  // })

  return (
    <div className="bg-zad-green text-white">
      <div className="section relative flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center lg:flex-row">
        <div className="flex w-full flex-col items-start gap-md">
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
                    <CMSLink {...link} className="" />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <div className="aspect-square h-auto w-full select-none">
          {media && typeof media === 'object' && (
            <Media imgClassName="z-10 object-cover" priority resource={media} />
          )}
        </div>
      </div>
    </div>
  )
}
