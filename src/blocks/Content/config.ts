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
import icons from '@/fields/iconPickerField/remix-icons.json'
import { iconPickerField } from '@/fields/iconPickerField'

const listItems: Field[] = [
  {
    name: 'list',
    type: 'array',
    fields: [
      {
        name: 'size',
        type: 'select',
        defaultValue: 'oneThird',
        admin: {
          condition: (data, siblingData, { blockData }) => {
            return Boolean(blockData?.variant === '1')
          },
        },
        options: [
          {
            label: 'One Third',
            value: 'oneThird',
          },
          {
            label: 'Half',
            value: 'half',
          },
          {
            label: 'Two Thirds',
            value: 'twoThirds',
          },
          {
            label: 'Full',
            value: 'full',
          },
        ],
      },
      iconPickerField({
        name: 'icon',
        label: 'Icon',
        icons: icons,
        admin: {
          description:
            'Select an icon from the Remix icon set. You can preview all available icons at https://remixicon.com/',
          condition: (data, siblingData, { blockData }) => {
            return Boolean(['2', '3'].includes(blockData?.variant))
          },
        },
      }),
      {
        name: 'tag',
        type: 'text',
        admin: {
          condition: (data, siblingData, { blockData }) => {
            return Boolean(['4'].includes(blockData.variant))
          },
        },
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
        admin: {
          condition: (_data, siblingData, { blockData }) => {
            return Boolean(['2', '4'].includes(blockData?.variant))
          },
        },
      },
      link({
        overrides: {
          admin: {
            condition: (data, siblingData, { blockData }) => {
              return Boolean(blockData?.variant === '1')
            },
          },
        },
      }),
    ],
  },
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      options: ['1', '2', '3', '4'],
      defaultValue: '1',
      required: true,
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
    ...listItems,
  ],
}
