import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { RenderContent } from '@/blocks/Content/RenderContent'
import { FaqBlock } from '@/blocks/FaqBlock/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { LogoBlock } from '@/blocks/LogoBlock/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { PricingBlock } from '@/blocks/PricingBlock/Component'
import { StatsBlock } from '@/blocks/StatsBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: RenderContent,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  faqBlock: FaqBlock,
  logoBlock: LogoBlock,
  mediaBlock: MediaBlock,
  pricingBlock: PricingBlock,
  statsBlock: StatsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  // blocks.map((block) => block.blockType === 'logoBlock' && console.log(block))
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType, blockName } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index} id={blockName ?? undefined}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
