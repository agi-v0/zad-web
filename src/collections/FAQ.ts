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
import { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  fields: [
    {
      name: 'question',
      type: 'text',
      label: 'Question',
      localized: true,
    },
    {
      name: 'answer',
      type: 'richText',
      label: 'Answer',
      localized: true,
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
  ],
}
