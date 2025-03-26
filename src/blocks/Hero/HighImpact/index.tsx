'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import type { Page, Media as MediaType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { AnimatedGroup } from '@/components/motion/animated-group'
import { cn } from '@/utilities/ui'
import step01Front from './images/step01Front.svg'
import step01Back from './images/step01Back.svg'
import step02Front from './images/step02Front.svg'
import step02Back from './images/step02Back.svg'
import step03Front from './images/step03Front.svg'
import step03Back from './images/step03Back.svg'
import { InfiniteSlider } from '@/components/motion/infinite-slider'
import { AnimatePresence, motion } from 'motion/react'

const content = [
  {
    title: 'أنشئ منتجات تبرع مخصصة في دقائق',
    description: 'حدد مستويات التبرع، أضف صورًا، وخصص لقضيتك',
    frontImage: step01Front,
    backImage: step01Back,
  },
  {
    title: 'أطلق منصة لجمع التبرعات دون عناء',
    description: 'أطلق متجرًا جذابًا للتفاعل مع المتبرعين',
    frontImage: step02Front,
    backImage: step02Back,
  },
  {
    title: 'تتبع أثرك، وحسّنه، ووسّعه',
    description: 'استخدم أدوات التسويق للتفاعل مع المتبرعين والاحتفاظ بهم',
    frontImage: step03Front,
    backImage: step03Back,
  },
]
export const HighImpactHero: React.FC<Page['hero']> = ({
  links,
  linkText,
  media,
  logos,
  richText,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  // useEffect(() => {
  //   setCurrentIndex(0)
  // }, [])

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
        <div className="py-site lg:ps-site h-auto w-full basis-1/2 select-none lg:pt-0">
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + 'front'}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
                exit={{ x: 100, opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
                className="absolute inset-0 z-10 aspect-square h-auto w-full"
              >
                <Image
                  src={content[currentIndex]?.frontImage}
                  alt={content[currentIndex]?.title || ''}
                  className="aspect-square h-auto w-full object-contain"
                />
              </motion.div>
              <motion.div
                key={currentIndex + 'back'}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                exit={{ x: 100, opacity: 0, transition: { duration: 0.5 } }}
              >
                <Image
                  src={content[currentIndex]?.backImage}
                  alt={content[currentIndex]?.title || ''}
                  className="aspect-square h-auto w-full object-contain"
                />
              </motion.div>
              <motion.div
                key={currentIndex + 'text'}
                style={{
                  transformOrigin: 'center',
                  marginTop: 'var(--spacing-md)',
                }}
                initial={{ y: 40, rotate: -3, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                exit={{ y: -40, rotate: 3, opacity: 0 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <p className="text-body-large font-medium">{content[currentIndex]?.title}</p>
                <p className="text-foreground-tertiary text-body-small">
                  {content[currentIndex]?.description}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* {media && typeof media === 'object' && (
            <Media imgClassName="z-10 object-cover" priority resource={media} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}
