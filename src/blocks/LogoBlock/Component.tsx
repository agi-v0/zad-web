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
    list,
    className,
    disableInnerContainer,
    captionClassName,
    disableCaption,
    imgClassName,
    media,
  } = props

  return (
    <div className="w-full bg-zad-green" data-theme="dark">
      <div className={cn('flex flex-col', className)}>
        {caption && !disableCaption && (
          <div
            className={cn(
              'section w-full pt-site',
              {
                container: !disableInnerContainer,
              },
              captionClassName,
            )}
          >
            <RichText className="m-0" data={caption} enableGutter={false} />
          </div>
        )}
        {list && (
          <AnimatedGroup
            className="section flex w-full flex-row justify-between gap-10 py-site"
            preset="slide"
          >
            {list.map((item) => (
              <Media
                key={item.id}
                imgClassName={cn('h-10 w-auto', imgClassName)}
                resource={item.media}
              />
            ))}
          </AnimatedGroup>
        )}
      </div>
    </div>
  )
}
