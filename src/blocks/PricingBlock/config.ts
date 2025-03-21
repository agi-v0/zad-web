import { iconPickerField } from '@/fields/iconPickerField'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import icons from '@/fields/iconPickerField/remix-icons.json'
import { Block, Field } from 'payload'

const features: Field[] = [
  {
    name: 'tag',
    type: 'text',
  },
  {
    name: 'heading',
    type: 'text',
  },
  {
    name: 'content',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
      },
    }),
  },
]
const featureItems: Field[] = [
  iconPickerField({
    name: 'icon',
    icons: icons,
  }),
  {
    name: 'feature',
    type: 'text',
  },
  { name: 'description', type: 'text' },
]

export const PricingBlock: Block = {
  slug: 'pricingBlock',
  interfaceName: 'PricingBlock',
  fields: [
    {
      name: 'tag',
      type: 'text',
    },
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
    {
      name: 'baseFeatures',
      type: 'group',
      fields: [
        ...features,
        {
          name: 'features',
          type: 'array',
          fields: [...featureItems],
        },
      ],
    },
    {
      name: 'additionalFeatures',
      type: 'group',
      fields: [
        ...features,
        {
          name: 'features',
          type: 'array',
          fields: [...featureItems],
        },
      ],
    },
  ],
}
