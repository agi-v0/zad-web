import {
  InlineToolbarFeature,
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const LogoBlock: Block = {
  slug: 'logoBlock',
  interfaceName: 'LogoBlock',
  fields: [
    {
      name: 'caption',
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
    {
      name: 'logos',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
  ],
}
