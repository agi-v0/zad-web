import RichText from '@/components/RichText'
import { PricingBlock as PricingBlockProps } from '@/payload-types'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'

export const PricingBlock: React.FC<PricingBlockProps> = (props) => {
  const { tag, richText, baseFeatures, additionalFeatures } = props
  return (
    <div className="bg-zad-beige-light py-site w-full">
      <div className="section gap-md flex flex-col items-center">
        {richText && (
          <div className="gap-sm flex flex-col items-center">
            {tag && (
              <span className="bg-zad-lime rounded-full px-3 py-1 text-sm font-bold">{tag}</span>
            )}
            <RichText className="mx-auto text-center" data={richText} enableGutter={false} />
          </div>
        )}
        <div className="gap-md grid grid-cols-1 lg:grid-cols-2">
          {baseFeatures && (
            <div className="space-y-md bg-background p-lg w-full rounded-3xl">
              <div className="flex flex-col">
                <h3 className="text-h5 text-foreground-primary font-bold">
                  {baseFeatures.heading}
                </h3>
                <RichText
                  className="prose-p:text-body-large m-0"
                  data={baseFeatures.content as any}
                  enableGutter={false}
                />
              </div>
              <ul className="gap-sm grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                {baseFeatures?.features?.map((item) => (
                  <li key={item.id} className="flex flex-row items-center gap-4 rounded-lg">
                    {item.icon && (
                      <div className="bg-zad-beige inline-flex w-fit rounded-full p-3">
                        <Icon
                          icon={`ri:${item.icon}`}
                          className="text-foreground-primary text-2xl leading-none"
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <p className="text-body-large text-foreground-primary font-bold">
                        {item.feature}
                      </p>
                      {item.description && (
                        <p className="text-body-m text-foreground-tertiary">{item.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {additionalFeatures && (
            <div className="space-y-md bg-zad-green p-lg w-full rounded-3xl" data-theme="dark">
              <div className="flex flex-col">
                <h3 className="text-h5 me-lg font-bold text-white">{additionalFeatures.heading}</h3>
                <RichText
                  className="prose-p:text-body-large prose-invert m-0"
                  data={additionalFeatures.content as any}
                  enableGutter={false}
                />
              </div>
              <ul className="gap-sm grid w-full grid-cols-1 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-1">
                {additionalFeatures?.features?.map((item) => (
                  <li key={item.id} className="flex flex-row items-center gap-4 rounded-lg">
                    {item.icon && (
                      <div className="bg-zad-beige inline-flex w-fit rounded-full p-3">
                        <Icon
                          icon={`ri:${item.icon}`}
                          className="text-zad-green text-2xl leading-none"
                        />
                      </div>
                    )}
                    <div className="me-4 flex flex-col">
                      <p className="text-body-large font-bold text-white">{item.feature}</p>
                      {item.description && (
                        <p className="text-body-m text-white/50">{item.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
