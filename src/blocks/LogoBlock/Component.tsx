import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { LogoBlock as LogoBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'
import { AnimatedGroup } from '@/components/motion/animated-group'

type ExtendedLogoBlockProps = LogoBlockProps & {
  className?: string
  disableInnerContainer?: boolean
  captionClassName?: string
  imgClassName?: string
  disableCaption?: boolean
  media?: any // Replace 'any' with the correct type if known
}

export const LogoBlock: React.FC<ExtendedLogoBlockProps> = (props) => {
  const {
    caption,
    logos,
    className,
    disableInnerContainer,
    captionClassName,
    disableCaption,
    imgClassName,
    media,
  } = props

  return (
    <div className="bg-zad-green w-full" data-theme="dark">
      <div className={cn('flex flex-col', className)}>
        {caption && !disableCaption && (
          <div
            className={cn(
              'section pt-site w-full',
              {
                container: !disableInnerContainer,
              },
              captionClassName,
            )}
          >
            <RichText
              className="prose-headings:text-white prose-p:text-white/50 m-0"
              data={caption}
              enableGutter={false}
            />
          </div>
        )}
        {logos && (
          <AnimatedGroup
            className="section py-site flex w-full flex-row justify-between gap-10"
            preset="slide"
          >
            {logos.map((item, index) => (
              <Media key={index} imgClassName={cn('h-10 w-auto', imgClassName)} resource={item} />
            ))}
          </AnimatedGroup>
        )}
      </div>
    </div>
  )
}
