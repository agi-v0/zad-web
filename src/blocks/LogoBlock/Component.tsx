import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { LogoBlock as LogoBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

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
    <div className="bg-zad-green w-full">
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
            <RichText className="m-0 text-white" data={caption} enableGutter={false} />
          </div>
        )}
        {list && (
          <div className="section py-site flex w-full flex-row gap-10">
            {list.map((item) => (
              <Media
                key={item.id}
                imgClassName={cn('h-10 w-auto', imgClassName)}
                resource={item.media}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
