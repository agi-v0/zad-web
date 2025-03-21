import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { InlineToolbarFeature } from 'node_modules/@payloadcms/richtext-lexical/dist/features/toolbars/inline/server'
import { FixedToolbarFeature } from 'node_modules/@payloadcms/richtext-lexical/dist/features/toolbars/fixed/server'
import { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  fields: [
    { name: 'question', type: 'text', localized: true },
    {
      name: 'answer',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
  ],
}
