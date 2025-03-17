'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  // const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('dark')
  // })

  return (
    <div className="bg-zad-green text-white" data-theme="dark">
      <div className="section relative flex flex-row items-center justify-center">
        <div className="flex w-full flex-col items-start">
          {richText && <RichText className="" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 md:justify-center">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <div className="aspect-square h-auto w-full select-none">
          {media && typeof media === 'object' && (
            <Media imgClassName="-z-10 object-cover" priority resource={media} />
          )}
        </div>
      </div>
    </div>
  )
}
