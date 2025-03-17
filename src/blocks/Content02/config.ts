import type { Block, Field } from 'payload'

import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const listItems: Field[] = [
  {
    name: 'list',
    type: 'array',
    fields: [
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'text',
        type: 'richText',
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [
              ...rootFeatures,
              LinkFeature(),
              BoldFeature(),
              ItalicFeature(),
              ParagraphFeature(),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ]
          },
        }),
      },
      {
        name: 'media',
        type: 'upload',
        relationTo: 'media',
      },
    ],
  },
]

export const Content02: Block = {
  slug: 'content02',
  interfaceName: 'Content02Block',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    ...listItems,
  ],
}
