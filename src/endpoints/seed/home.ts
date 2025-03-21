import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const home =
  () =>
  ({}) => {
    return {
      id: 1,
      title: 'Home',
      hero: {
        type: 'highImpact' as const,
        richText: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                tag: 'h1',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'تعزيز العطاء الرقمي ونمو الجمعيات',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'rtl',
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'زاد منظومة خدمات متكاملة تمكن جمعيتك من تحقيق دخل متنوع ومستدام.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'rtl',
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: 'rtl',
          },
        },
        links: [
          {
            id: '67dd2741ea208a05e1daa429',

            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: {
                  id: 1,
                  title: 'Home',
                  slug: 'home',
                },
              },
              url: null,
              label: 'إبدأ مع زاد الآن',
              appearance: 'default',
            },
          },
        ],

        media: {
          id: 1,
          alt: 'hero',
          caption: null,
          updatedAt: '2025-03-16T19:03:09.873Z',
          createdAt: '2025-03-16T19:03:04.333Z',
          url: '/api/media/file/hero.png',
          thumbnailURL: '/api/media/file/hero-300x300.png',
          filename: 'hero.png',
          mimeType: 'image/png',
          filesize: 67172,
          width: 1176,
          height: 1176,
          focalX: 50,
          focalY: 50,

          sizes: {
            thumbnail: {
              url: '/api/media/file/hero-300x300.png',
              width: 300,
              height: 300,
              mimeType: 'image/png',
              filesize: 14199,
              filename: 'hero-300x300.png',
            },

            square: {
              url: '/api/media/file/hero-500x500.png',
              width: 500,
              height: 500,
              mimeType: 'image/png',
              filesize: 28446,
              filename: 'hero-500x500.png',
            },

            small: {
              url: '/api/media/file/hero-600x600.png',
              width: 600,
              height: 600,
              mimeType: 'image/png',
              filesize: 36076,
              filename: 'hero-600x600.png',
            },

            medium: {
              url: '/api/media/file/hero-900x900.png',
              width: 900,
              height: 900,
              mimeType: 'image/png',
              filesize: 63144,
              filename: 'hero-900x900.png',
            },

            large: {
              url: null,
              width: null,
              height: null,
              mimeType: null,
              filesize: null,
              filename: null,
            },

            xlarge: {
              url: null,
              width: null,
              height: null,
              mimeType: null,
              filesize: null,
              filename: null,
            },

            og: {
              url: '/api/media/file/hero-1200x630.png',
              width: 1200,
              height: 630,
              mimeType: 'image/png',
              filesize: 71036,
              filename: 'hero-1200x630.png',
            },
          },
        },
      },

      layout: [
        {
          id: '67dd2a7dee9c04239ea1fea1',
          variant: '2',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'لماذا تختار الجمعيات زاد ؟',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },
              ],
              direction: 'rtl',
            },
          },
          blockName: 'WHY ZAD',

          list: [
            {
              id: '67dd2aa8ee9c04239ea1fea3',
              size: 'oneThird',
              icon: null,
              tag: null,
              heading: 'حلول رقمية متكاملة',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'لإنشاء وإدارة منصة التبرع الخاصة بالجمعية بسهولة وبشكل آني',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },

              media: {
                id: 4,
                alt: 'تحقيق الاستدامة المالية للجمعية',
                caption: null,
                updatedAt: '2025-03-21T09:06:24.116Z',
                createdAt: '2025-03-21T09:06:24.059Z',
                url: '/api/media/file/solutions-1.png',
                thumbnailURL: '/api/media/file/solutions-1-300x300.png',
                filename: 'solutions-1.png',
                mimeType: 'image/png',
                filesize: 31289,
                width: 1000,
                height: 1000,
                focalX: 50,
                focalY: 50,

                sizes: {
                  thumbnail: {
                    url: '/api/media/file/solutions-1-300x300.png',
                    width: 300,
                    height: 300,
                    mimeType: 'image/png',
                    filesize: 16009,
                    filename: 'solutions-1-300x300.png',
                  },

                  square: {
                    url: '/api/media/file/solutions-1-500x500.png',
                    width: 500,
                    height: 500,
                    mimeType: 'image/png',
                    filesize: 30883,
                    filename: 'solutions-1-500x500.png',
                  },

                  small: {
                    url: '/api/media/file/solutions-1-600x600.png',
                    width: 600,
                    height: 600,
                    mimeType: 'image/png',
                    filesize: 40246,
                    filename: 'solutions-1-600x600.png',
                  },

                  medium: {
                    url: '/api/media/file/solutions-1-900x900.png',
                    width: 900,
                    height: 900,
                    mimeType: 'image/png',
                    filesize: 71377,
                    filename: 'solutions-1-900x900.png',
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: '/api/media/file/solutions-1-1200x630.png',
                    width: 1200,
                    height: 630,
                    mimeType: 'image/png',
                    filesize: 83306,
                    filename: 'solutions-1-1200x630.png',
                  },
                },
              },

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                label: null,
                appearance: 'default',
              },
            },

            {
              id: '67dd2c29ee9c04239ea1fea5',
              size: 'oneThird',
              icon: null,
              tag: null,
              heading: 'تحقيق الاستدامة المالية للجمعية',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'عبر تنويع مصادر الدخل ، وخدمات زاد ليست حصرا على منصة التبرعات',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },

              media: {
                id: 2,
                alt: 'تحقيق الاستدامة المالية للجمعية',
                caption: null,
                updatedAt: '2025-03-21T09:06:23.968Z',
                createdAt: '2025-03-21T09:06:23.913Z',
                url: '/api/media/file/growth-1.png',
                thumbnailURL: '/api/media/file/growth-1-300x300.png',
                filename: 'growth-1.png',
                mimeType: 'image/png',
                filesize: 37374,
                width: 1000,
                height: 1000,
                focalX: 50,
                focalY: 50,

                sizes: {
                  thumbnail: {
                    url: '/api/media/file/growth-1-300x300.png',
                    width: 300,
                    height: 300,
                    mimeType: 'image/png',
                    filesize: 22044,
                    filename: 'growth-1-300x300.png',
                  },

                  square: {
                    url: '/api/media/file/growth-1-500x500.png',
                    width: 500,
                    height: 500,
                    mimeType: 'image/png',
                    filesize: 39757,
                    filename: 'growth-1-500x500.png',
                  },

                  small: {
                    url: '/api/media/file/growth-1-600x600.png',
                    width: 600,
                    height: 600,
                    mimeType: 'image/png',
                    filesize: 52932,
                    filename: 'growth-1-600x600.png',
                  },

                  medium: {
                    url: '/api/media/file/growth-1-900x900.png',
                    width: 900,
                    height: 900,
                    mimeType: 'image/png',
                    filesize: 99605,
                    filename: 'growth-1-900x900.png',
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: '/api/media/file/growth-1-1200x630.png',
                    width: 1200,
                    height: 630,
                    mimeType: 'image/png',
                    filesize: 93937,
                    filename: 'growth-1-1200x630.png',
                  },
                },
              },

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                label: null,
                appearance: 'default',
              },
            },

            {
              id: '67dd2c5eee9c04239ea1fea7',
              size: 'oneThird',
              icon: null,
              tag: null,
              heading: 'مساندة الجمعية في إدارة العلاقة مع المتبرعين',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'مساندة الجمعية في إدارة العلاقة مع المتبرعين',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },

              media: {
                id: 6,
                alt: 'مساندة الجمعية في إدارة العلاقة مع المتبرعين',
                caption: null,
                updatedAt: '2025-03-21T09:06:33.304Z',
                createdAt: '2025-03-21T09:06:33.243Z',
                url: '/api/media/file/crm-2.png',
                thumbnailURL: '/api/media/file/crm-2-300x300.png',
                filename: 'crm-2.png',
                mimeType: 'image/png',
                filesize: 28762,
                width: 1000,
                height: 1000,
                focalX: 50,
                focalY: 50,

                sizes: {
                  thumbnail: {
                    url: '/api/media/file/crm-2-300x300.png',
                    width: 300,
                    height: 300,
                    mimeType: 'image/png',
                    filesize: 14503,
                    filename: 'crm-2-300x300.png',
                  },

                  square: {
                    url: '/api/media/file/crm-2-500x500.png',
                    width: 500,
                    height: 500,
                    mimeType: 'image/png',
                    filesize: 26937,
                    filename: 'crm-2-500x500.png',
                  },

                  small: {
                    url: '/api/media/file/crm-2-600x600.png',
                    width: 600,
                    height: 600,
                    mimeType: 'image/png',
                    filesize: 34865,
                    filename: 'crm-2-600x600.png',
                  },

                  medium: {
                    url: '/api/media/file/crm-2-900x900.png',
                    width: 900,
                    height: 900,
                    mimeType: 'image/png',
                    filesize: 64139,
                    filename: 'crm-2-900x900.png',
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: '/api/media/file/crm-2-1200x630.png',
                    width: 1200,
                    height: 630,
                    mimeType: 'image/png',
                    filesize: 57979,
                    filename: 'crm-2-1200x630.png',
                  },
                },
              },

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                label: null,
                appearance: 'default',
              },
            },

            {
              id: '67dd2c7eee9c04239ea1fea9',
              size: 'oneThird',
              icon: null,
              tag: null,
              heading: 'دعم فني وتسويقي مستمر',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'للمساهمة في رفع إيرادات الجمعية من جميع أنشطتها الترويجية والتسويقية',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },

              media: {
                id: 5,
                alt: 'تحقيق الاستدامة المالية للجمعية',
                caption: null,
                updatedAt: '2025-03-21T09:06:24.190Z',
                createdAt: '2025-03-21T09:06:24.132Z',
                url: '/api/media/file/support-1.png',
                thumbnailURL: '/api/media/file/support-1-300x300.png',
                filename: 'support-1.png',
                mimeType: 'image/png',
                filesize: 40850,
                width: 1000,
                height: 1000,
                focalX: 50,
                focalY: 50,

                sizes: {
                  thumbnail: {
                    url: '/api/media/file/support-1-300x300.png',
                    width: 300,
                    height: 300,
                    mimeType: 'image/png',
                    filesize: 21496,
                    filename: 'support-1-300x300.png',
                  },

                  square: {
                    url: '/api/media/file/support-1-500x500.png',
                    width: 500,
                    height: 500,
                    mimeType: 'image/png',
                    filesize: 40075,
                    filename: 'support-1-500x500.png',
                  },

                  small: {
                    url: '/api/media/file/support-1-600x600.png',
                    width: 600,
                    height: 600,
                    mimeType: 'image/png',
                    filesize: 51687,
                    filename: 'support-1-600x600.png',
                  },

                  medium: {
                    url: '/api/media/file/support-1-900x900.png',
                    width: 900,
                    height: 900,
                    mimeType: 'image/png',
                    filesize: 94301,
                    filename: 'support-1-900x900.png',
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: '/api/media/file/support-1-1200x630.png',
                    width: 1200,
                    height: 630,
                    mimeType: 'image/png',
                    filesize: 110283,
                    filename: 'support-1-1200x630.png',
                  },
                },
              },

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                label: null,
                appearance: 'default',
              },
            },
          ],
          blockType: 'content',
        },

        {
          id: '67dd2eb8a896e469ebeae65b',
          variant: '3',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'كيف تعمل زاد؟',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },
              ],
              direction: 'rtl',
            },
          },
          blockName: 'HOW TO',

          list: [
            {
              id: '67dd2ef2a896e469ebeae65d',
              size: 'oneThird',
              icon: 'user-add-line',
              tag: null,
              heading: 'أنشئ حسابك في دقائق',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'عبر تسجيل الدخول برقم الترخيص الصادر من مركز تنمية القطاع غير الربحي',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },
              media: null,

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                appearance: 'default',
              },
            },

            {
              id: '67dd2f24a896e469ebeae65f',
              size: 'oneThird',
              icon: 'store-2-line',
              tag: null,
              heading: 'إعداد متجرك',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'أضف فرص التبرع بسهولة وعدل منصة الجمعية بأفضل ما يمكن',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },
              media: null,

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                appearance: 'default',
              },
            },

            {
              id: '67dd2f3da896e469ebeae661',
              size: 'oneThird',
              icon: 'broadcast-line',
              tag: null,
              heading: 'جذب المتبرعين',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'استخدم أوبتمايز بلس لإدارة الحملات الترويجية في جميع منصات التواصل بسهولة',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },
              media: null,

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                appearance: 'default',
              },
            },

            {
              id: '67dd2f5ba896e469ebeae663',
              size: 'oneThird',
              icon: 'line-chart-line',
              tag: null,
              heading: 'استدامة الجمعية المالية',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'تتبع التبرعات وتحليل الأداء من خلال أدوات منصة زاد',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },
              media: null,

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                appearance: 'default',
              },
            },
          ],
          blockType: 'content',
        },

        {
          id: '67dd440da14b92b128ef217e',

          caption: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h3',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'شركاؤنا في دعم وتمكين المنظمات غير الربحية',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },
              ],
              direction: 'rtl',
            },
          },
          blockName: 'PARTNERS',

          list: [
            {
              id: '67dd45d1a14b92b128ef2182',

              media: {
                id: 12,
                alt: null,
                caption: null,
                updatedAt: '2025-03-21T10:45:46.756Z',
                createdAt: '2025-03-21T10:45:46.752Z',
                url: '/api/media/file/Tiktok-1.svg',
                thumbnailURL: null,
                filename: 'Tiktok-1.svg',
                mimeType: 'image/svg+xml',
                filesize: 2490,
                width: 135,
                height: 40,
                focalX: null,
                focalY: null,

                sizes: {
                  thumbnail: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  square: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  small: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  medium: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },
                },
              },
            },

            {
              id: '67dd45d7a14b92b128ef2184',

              media: {
                id: 11,
                alt: null,
                caption: null,
                updatedAt: '2025-03-21T10:45:46.742Z',
                createdAt: '2025-03-21T10:45:46.738Z',
                url: '/api/media/file/Taqrer-1.svg',
                thumbnailURL: null,
                filename: 'Taqrer-1.svg',
                mimeType: 'image/svg+xml',
                filesize: 7316,
                width: 117,
                height: 40,
                focalX: null,
                focalY: null,

                sizes: {
                  thumbnail: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  square: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  small: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  medium: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },
                },
              },
            },

            {
              id: '67dd45dca14b92b128ef2186',

              media: {
                id: 10,
                alt: null,
                caption: null,
                updatedAt: '2025-03-21T10:45:46.728Z',
                createdAt: '2025-03-21T10:45:46.724Z',
                url: '/api/media/file/Snapchat-1.svg',
                thumbnailURL: null,
                filename: 'Snapchat-1.svg',
                mimeType: 'image/svg+xml',
                filesize: 11194,
                width: 137,
                height: 40,
                focalX: null,
                focalY: null,

                sizes: {
                  thumbnail: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  square: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  small: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  medium: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },
                },
              },
            },

            {
              id: '67dd45e1a14b92b128ef2188',

              media: {
                id: 9,
                alt: null,
                caption: null,
                updatedAt: '2025-03-21T10:45:46.711Z',
                createdAt: '2025-03-21T10:45:46.706Z',
                url: '/api/media/file/Optimize-1.svg',
                thumbnailURL: null,
                filename: 'Optimize-1.svg',
                mimeType: 'image/svg+xml',
                filesize: 7828,
                width: 155,
                height: 40,
                focalX: null,
                focalY: null,

                sizes: {
                  thumbnail: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  square: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  small: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  medium: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },
                },
              },
            },

            {
              id: '67dd45e6a14b92b128ef218a',

              media: {
                id: 8,
                alt: null,
                caption: null,
                updatedAt: '2025-03-21T10:45:46.694Z',
                createdAt: '2025-03-21T10:45:46.688Z',
                url: '/api/media/file/NCNS-1.svg',
                thumbnailURL: null,
                filename: 'NCNS-1.svg',
                mimeType: 'image/svg+xml',
                filesize: 82367,
                width: 93,
                height: 40,
                focalX: null,
                focalY: null,

                sizes: {
                  thumbnail: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  square: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  small: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  medium: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },
                },
              },
            },

            {
              id: '67dd45eca14b92b128ef218c',

              media: {
                id: 7,
                alt: null,
                caption: null,
                updatedAt: '2025-03-21T10:45:46.675Z',
                createdAt: '2025-03-21T10:45:46.666Z',
                url: '/api/media/file/Eshtarek-1.svg',
                thumbnailURL: null,
                filename: 'Eshtarek-1.svg',
                mimeType: 'image/svg+xml',
                filesize: 8724,
                width: 125,
                height: 40,
                focalX: null,
                focalY: null,

                sizes: {
                  thumbnail: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  square: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  small: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  medium: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },
                },
              },
            },
          ],
          blockType: 'logoBlock',
        },

        {
          id: '67dd462aa14b92b128ef218e',
          caption: null,
          blockName: 'STATS',

          list: [
            {
              id: '67dd4630a14b92b128ef2190',
              number: '+1200',
              description: 'جمعية استفادت من زاد منذ 2022',
            },

            {
              id: '67dd4641a14b92b128ef2192',
              number: '+650 مليون ريال',
              description: 'حققت الجمعيات التي تستخدم زاد عبر منصاتها',
            },

            {
              id: '67dd467fa14b92b128ef2194',
              number: '+6 مليون محسن',
              description: 'تبرع عن طريق منصات زاد',
            },
          ],
          blockType: 'statsBlock',
        },

        {
          id: '67dd41cca896e469ebeae665',
          variant: '4',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'كل ما تحتاجه لتشغيل متجرك الخيري',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },

                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'خصائص تمكن الجمعيات الخيرية من تشغيل متاجر خيرية، تسويقها ومراقبة أداءها، وجمع التبرعات بسهولة',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                  textStyle: '',
                  textFormat: 0,
                },
              ],
              direction: 'rtl',
            },
          },
          blockName: 'FEATURES',

          list: [
            {
              id: '67dd42c2a14b92b128ef217a',
              size: 'oneThird',
              icon: null,
              tag: 'منصة متكاملة تقنيا',
              heading: 'لوحة تحكم سهلة الإستخدام',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'لوحة تحكم خاصة للجمعيات حيث يمكن للجمعية الاستفادة من لوحة تحكم باللغة العربية وقابلة للاستخدام دون الحاجة لخبرة برمجية',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },

              media: {
                id: 14,
                alt: 'لوحة تحكم سهلة الإستخدام',
                caption: null,
                updatedAt: '2025-03-21T10:47:43.909Z',
                createdAt: '2025-03-21T10:47:43.830Z',
                url: '/api/media/file/Container.png',
                thumbnailURL: '/api/media/file/Container-300x231.png',
                filename: 'Container.png',
                mimeType: 'image/png',
                filesize: 211955,
                width: 1249,
                height: 960,
                focalX: 50,
                focalY: 50,

                sizes: {
                  thumbnail: {
                    url: '/api/media/file/Container-300x231.png',
                    width: 300,
                    height: 231,
                    mimeType: 'image/png',
                    filesize: 23958,
                    filename: 'Container-300x231.png',
                  },

                  square: {
                    url: '/api/media/file/Container-500x500.png',
                    width: 500,
                    height: 500,
                    mimeType: 'image/png',
                    filesize: 48397,
                    filename: 'Container-500x500.png',
                  },

                  small: {
                    url: '/api/media/file/Container-600x461.png',
                    width: 600,
                    height: 461,
                    mimeType: 'image/png',
                    filesize: 69105,
                    filename: 'Container-600x461.png',
                  },

                  medium: {
                    url: '/api/media/file/Container-900x692.png',
                    width: 900,
                    height: 692,
                    mimeType: 'image/png',
                    filesize: 138936,
                    filename: 'Container-900x692.png',
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: '/api/media/file/Container-1200x630.png',
                    width: 1200,
                    height: 630,
                    mimeType: 'image/png',
                    filesize: 154133,
                    filename: 'Container-1200x630.png',
                  },
                },
              },

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                appearance: 'default',
              },
            },

            {
              id: '67dd42f7a14b92b128ef217c',
              size: 'oneThird',
              icon: null,
              tag: 'إدارة ذكية لأعمالك',
              heading: 'تقارير تفصيلية عن أداء المشروع',

              content: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      type: 'paragraph',
                      format: '',
                      indent: 0,
                      version: 1,

                      children: [
                        {
                          mode: 'normal',
                          text: 'متابعة أداء المتجر بشكل عام، والحصول على تحليلات دقيقة بشكل واضح ومعرفة كافة التبرعات ومصادرها سواء لفرص أو منتجات التبرع ويمكن تصديرها بشكل مفصل.',
                          type: 'text',
                          style: '',
                          detail: 0,
                          format: 0,
                          version: 1,
                        },
                      ],
                      direction: 'rtl',
                      textStyle: '',
                      textFormat: 0,
                    },
                  ],
                  direction: 'rtl',
                },
              },

              media: {
                id: 13,
                alt: 'تقارير تفصيلية عن أداء المشروع',
                caption: null,
                updatedAt: '2025-03-21T10:47:43.815Z',
                createdAt: '2025-03-21T10:47:43.720Z',
                url: '/api/media/file/Container-1.png',
                thumbnailURL: '/api/media/file/Container-1-300x231.png',
                filename: 'Container-1.png',
                mimeType: 'image/png',
                filesize: 389761,
                width: 1249,
                height: 960,
                focalX: 50,
                focalY: 50,

                sizes: {
                  thumbnail: {
                    url: '/api/media/file/Container-1-300x231.png',
                    width: 300,
                    height: 231,
                    mimeType: 'image/png',
                    filesize: 33410,
                    filename: 'Container-1-300x231.png',
                  },

                  square: {
                    url: '/api/media/file/Container-1-500x500.png',
                    width: 500,
                    height: 500,
                    mimeType: 'image/png',
                    filesize: 93300,
                    filename: 'Container-1-500x500.png',
                  },

                  small: {
                    url: '/api/media/file/Container-1-600x461.png',
                    width: 600,
                    height: 461,
                    mimeType: 'image/png',
                    filesize: 106150,
                    filename: 'Container-1-600x461.png',
                  },

                  medium: {
                    url: '/api/media/file/Container-1-900x692.png',
                    width: 900,
                    height: 692,
                    mimeType: 'image/png',
                    filesize: 228706,
                    filename: 'Container-1-900x692.png',
                  },

                  large: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  xlarge: {
                    url: null,
                    width: null,
                    height: null,
                    mimeType: null,
                    filesize: null,
                    filename: null,
                  },

                  og: {
                    url: '/api/media/file/Container-1-1200x630.png',
                    width: 1200,
                    height: 630,
                    mimeType: 'image/png',
                    filesize: 320319,
                    filename: 'Container-1-1200x630.png',
                  },
                },
              },

              link: {
                type: 'reference',
                newTab: null,
                url: null,
                appearance: 'default',
              },
            },
          ],
          blockType: 'content',
        },

        {
          id: '67dd52363656a85f842b4237',
          tag: 'الميزات',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'باقة نمو زاد',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },
              ],
              direction: 'rtl',
            },
          },
          blockName: 'FEATURES #2',
          blockType: 'pricingBlock',

          baseFeatures: {
            tag: null,
            heading: 'المزايا الأساسية',

            content: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'كل ما تحتاجه لإطلاق متجرك الخيري',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'rtl',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'rtl',
              },
            },

            features: [
              {
                id: '67dd52393656a85f842b4239',
                icon: 'hand-coin-line',
                feature: 'فرص تبرع غير محدودة',
                description: null,
              },

              {
                id: '67dd55181a2c7d6139c33742',
                icon: 'group-line',
                feature: 'إدارة المنصة لـ5 أشخاص',
                description: null,
              },

              {
                id: '67dd55881a2c7d6139c33745',
                icon: 'pie-chart-line',
                feature: 'تحليلات متقدمة للمنصة',
                description: null,
              },

              {
                id: '67dd55b91a2c7d6139c33747',
                icon: 'bank-card-2-line',
                feature: 'ربط مع بوابة الدفع الإلكتروني وApple Pay',
                description: null,
              },
            ],
          },

          additionalFeatures: {
            tag: null,
            heading: 'مزايا إضافية مخصصة للجمعيات',
            content: null,

            features: [
              {
                id: '67dd542b26f6d0eda1519c82',
                icon: 'add-circle-line',
                feature: 'اوبتمايز بلس',
                description: 'لإدارة الحملات الإعلانية',
              },

              {
                id: '67dd56dd1a2c7d6139c3374b',
                icon: 'brush-ai-line',
                feature: 'ثيم إيثار الفخم',
                description: 'تفعيل مجاني لثيم إيثار المطور',
              },

              {
                id: '67dd573f1a2c7d6139c3374f',
                icon: 'shake-hands-line',
                feature: 'مساندة المتاجر التجارية لفرص التبرع',
                description: null,
              },

              {
                id: '67dd585e1a2c7d6139c33751',
                icon: 'megaphone-line',
                feature: 'قنوات ترويج إضافية',
                description: 'قيمة ترويج إضافية بالشراكة مع المنصات',
              },

              {
                id: '67dd58831a2c7d6139c33753',
                icon: 'customer-service-line',
                feature: 'استشارات مع خبراء',
                description: 'لتطوير عرض الفرص والمنصة',
              },

              {
                id: '67dd59211a2c7d6139c33755',
                icon: 'calendar-todo-line',
                feature: 'الاستقطاع الشهري',
                description: 'متجرك شغال بدون اشتراك',
              },
            ],
          },
        },

        {
          id: '67dd7bd5fb92c1f4e493e1ac',

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'الأسئلة الشائعة',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },

                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'داعمينك لين توصل جمعيتك للاستدامة. عندك اسئلة؟ يمديك تتواصل معنا عبر الاستمارة، الواتس اب، او مجادثة مباشرة.',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                  textStyle: '',
                  textFormat: 0,
                },
              ],
              direction: 'rtl',
            },
          },
          blockName: 'FAQ',

          links: [
            {
              id: '67dd7d2389b1617b0d62f87a',

              link: {
                type: 'reference',
                newTab: null,

                reference: {
                  relationTo: 'pages',

                  value: {
                    id: 1,
                    title: 'Home',
                    slug: 'home',
                  },
                },
                url: null,
                label: 'تواصل معنا',
                appearance: 'default',
              },
            },
          ],
          blockType: 'faqBlock',

          faqs: [
            {
              id: 1,
              question: 'هل زاد شركة تجارية ؟',
              answer: null,
              updatedAt: '2025-03-21T13:56:23.597Z',
              createdAt: '2025-03-21T13:56:23.595Z',
            },

            {
              id: 2,
              question: 'هل يمكنني تجربة زاد مجانًا ؟',
              answer: null,
              updatedAt: '2025-03-21T13:57:00.533Z',
              createdAt: '2025-03-21T13:57:00.532Z',
            },

            {
              id: 3,
              question: 'كم يستغرق إعداد المتجر؟',
              answer: null,
              updatedAt: '2025-03-21T13:57:16.925Z',
              createdAt: '2025-03-21T13:57:16.924Z',
            },

            {
              id: 4,
              question: 'كيف تتعامل زاد مع المدفوعات والتبرعات ؟',
              answer: null,
              updatedAt: '2025-03-21T13:57:34.598Z',
              createdAt: '2025-03-21T13:57:34.597Z',
            },

            {
              id: 5,
              question: 'ماذا لو احتجت لدعم تقني أو تسويقي ؟',
              answer: null,
              updatedAt: '2025-03-21T13:57:45.223Z',
              createdAt: '2025-03-21T13:57:45.222Z',
            },

            {
              id: 6,
              question: 'ما هي الأنشطة التي يمكنكم مساعدة الجمعية في إغلاق فرص التبرع الخاصة بها ؟',
              answer: null,
              updatedAt: '2025-03-21T13:57:56.474Z',
              createdAt: '2025-03-21T13:57:56.474Z',
            },

            {
              id: 7,
              question: 'كيف يمكن الجمعية الاستفادة من خدمات تطوير منصتها وفرص التبرع الخاصة بها ؟',
              answer: null,
              updatedAt: '2025-03-21T13:58:08.592Z',
              createdAt: '2025-03-21T13:58:08.591Z',
            },
          ],
        },

        {
          id: '67dd6dcfc06fe6cfef50c242',
          enableHeading: true,

          richText: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  tag: 'h2',
                  type: 'heading',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'سجل اهتمامك الآن!',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                },

                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: 'normal',
                      text: 'احصل على دليل التسويق للجمعيات مجانا',
                      type: 'text',
                      style: '',
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: 'rtl',
                  textStyle: '',
                  textFormat: 0,
                },
              ],
              direction: 'rtl',
            },
          },

          form: {
            id: 1,
            title: 'Contact form',

            fields: [
              {
                id: '67dd6bf4c06fe6cfef50c23c',
                name: 'name',
                width: null,
                required: true,
                blockName: null,
                blockType: 'text',
                label: 'الإسم',
                defaultValue: null,
              },

              {
                id: '67dd6c18c06fe6cfef50c23e',
                name: 'charityName',
                width: null,
                required: null,
                blockName: null,
                blockType: 'text',
                label: 'إسم الجمعية',
                defaultValue: null,
              },

              {
                id: '67dd6cc1c06fe6cfef50c240',
                name: 'phoneNumber',
                width: null,
                defaultValue: null,
                required: null,
                blockName: null,
                blockType: 'number',
                label: 'رقم الجوال',
              },
            ],
            submitButtonLabel: 'إبدأ زاد الجمعية الآن',
            confirmationType: 'message',

            confirmationMessage: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h2',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'شكراً لتواصلك معنا. لقد استلمنا رسالتك وسنرد عليك في غضون 24-48 ساعة.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'rtl',
                  },
                ],
                direction: 'rtl',
              },
            },

            redirect: {
              url: null,
            },

            emails: [],
            updatedAt: '2025-03-21T13:48:10.758Z',
            createdAt: '2025-03-21T13:46:42.697Z',
          },
          blockName: 'Form',
          blockType: 'formBlock',
        },
      ],

      meta: {
        title: null,
        image: null,
        description: null,
      },
      slug: 'home',

      _status: 'published',
    }
  }
