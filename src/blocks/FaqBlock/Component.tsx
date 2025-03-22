import { cn } from '@/utilities/ui'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import RichText from '@/components/RichText'
import { Icon } from '@iconify-icon/react'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { Faq, FaqBlock as FaqBlockProps } from '@/payload-types'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const FaqBlock: React.FC<FaqBlockProps> = async (props) => {
  const { richText, links, faqs } = props

  // Fetch FAQ data
  const payload = await getPayload({ config: configPromise })
  const faqIds = faqs.map((faq) => (typeof faq === 'number' ? faq : faq.id))

  const { docs: faqDocs } = await payload.find({
    collection: 'faq',
    where: {
      id: {
        in: faqIds,
      },
    },
  })

  return (
    <div className="w-full bg-zad-beige-light">
      <div className="section space-y-site">
        {richText && (
          <RichText className="mx-auto text-center" data={richText} enableGutter={false} />
        )}
        {faqDocs && (
          <div className="mx-auto grid w-full max-w-3xl grid-cols-1">
            <Accordion type="single" collapsible>
              {faqDocs.map((faq, idx) => (
                <AccordionItem value={'item-' + idx} key={idx}>
                  <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer ? (
                      <RichText
                        className="prose-p:text-body-l m-0 text-start"
                        data={faq.answer}
                        enableGutter={false}
                      />
                    ) : (
                      <p className="text-body-l">No answer provided</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  )
}
