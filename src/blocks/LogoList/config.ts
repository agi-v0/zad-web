import type { Block } from 'payload'

export const LogoList: Block = {
  slug: 'logoList',
  interfaceName: 'LogoList',
  fields: [
    {
      name: 'logoCaption',
      type: 'text',
    },
    {
      name: 'list',
      type: 'array',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
