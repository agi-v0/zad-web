import React from 'react'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { Icon } from '@iconify-icon/react'
import * as motion from 'motion/react-client'
import { CMSLink } from '../../../components/Link'
import { Media } from '@/components/Media'
import type { ContentBlock } from '@/payload-types'
import { Variants } from 'motion/react'
export const Content03: React.FC<ContentBlock> = (props) => {
  const { richText, list } = props

  return (
    <div className="bg-background-subtle relative">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.25 }}
        variants={{
          initial: {
            padding: '0px',
          },
          animate: {
            padding: 'var(--spacing-site)',
            transition: { type: 'ease-in-out', duration: 0.5 },
          },
        }}
      >
        <motion.div
          variants={variants}
          className="p-site gap-md bg-background flex flex-col items-center overflow-hidden"
        >
          {richText && (
            <RichText className="mx-auto text-center" data={richText} enableGutter={false} />
          )}
          {list && (
            <div className="gap-md grid w-full max-w-[calc(100vw-(--spacing-(site)*4))] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {list.map((item) => (
                <div key={item.id} className="gap-md flex flex-col items-center rounded-lg">
                  {item.icon && (
                    <div className="bg-zad-beige inline-flex w-fit rounded-full p-3">
                      <Icon
                        icon={`ri:${item.icon}`}
                        className="text-zad-green text-3xl leading-none"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-foreground-primary text-center text-(length:--text-body-large) font-bold">
                      {item.heading}
                    </h3>
                    {item.content && (
                      <RichText
                        className="prose-p:text-body-large m-0 text-center"
                        data={item.content}
                        enableGutter={false}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

const variants: Variants = {
  initial: { borderRadius: '0px' },
  animate: {
    borderRadius: '32px',
    transition: { type: 'spring', duration: 0.5 },
  },
}
