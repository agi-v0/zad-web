import React from 'react'

import type { ContentBlock, Page } from '@/payload-types'

import { Content01 } from '@/blocks/Content/Content01'
import { Content02 } from '@/blocks/Content/Content02'
import { Content03 } from '@/blocks/Content/Content03'

const contents = {
  '1': Content01,
  '2': Content02,
  '3': Content03,
}

export const RenderContent: React.FC<ContentBlock> = (props) => {
  const { variant } = props || {}

  if (!variant) return null

  const ContentToRender = contents[variant]

  if (!ContentToRender) return null

  return <ContentToRender {...props} />
}
