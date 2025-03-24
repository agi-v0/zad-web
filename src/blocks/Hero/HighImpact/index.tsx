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
export const HighImpactHero: React.FC<Page['hero']> = ({
  links,
  linkText,
  media,
  logos,
  richText,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="bg-background-subtle text-foreground" data-theme="light">
      <div className="section relative flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center lg:flex-row">
        <div className="gap-md mt-site flex w-full basis-1/2 flex-col items-start overflow-hidden lg:mt-0">
          {richText && (
            <RichText className="prose-p:text-body-large" data={richText} enableGutter={false} />
          )}
          <div className="flex flex-col gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex gap-4 max-md:w-full md:justify-center">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i} className="w-full">
                      <CMSLink
                        {...link}
                        size="lg"
                        className="not-dark:bg-zad-green not-dark:hover:bg-zad-green/90 not-dark:text-white max-md:w-full"
                      />
                    </li>
                  )
                })}
              </ul>
            )}
            {linkText && (
              <p className="text-foreground-tertiary text-sm font-medium">
                <span className="text-foreground-tertiary rounded-full bg-stone-950/5 px-2 py-1 text-sm font-medium">
                  حصريا
                </span>{' '}
                {linkText}
              </p>
            )}
          </div>
          {logos && (
            <InfiniteSlider gap={48} speed={56}>
              {logos.map((item, index) => (
                <Media
                  key={index}
                  imgClassName={cn('h-10 w-auto opacity-50 dark:invert')}
                  resource={item}
                />
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
