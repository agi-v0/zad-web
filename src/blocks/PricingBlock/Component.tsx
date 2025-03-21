import RichText from '@/components/RichText'
import { PricingBlock as PricingBlockProps } from '@/payload-types'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'

export const PricingBlock: React.FC<PricingBlockProps> = (props) => {
  const { tag, richText, baseFeatures, additionalFeatures } = props
  return (
    <div className="w-full bg-zad-beige-light py-site">
      <div className="section flex flex-col items-center gap-md">
        {richText && (
          <div className="flex flex-col items-center gap-sm">
            {tag && (
              <span className="rounded-full bg-zad-lime px-3 py-1 text-sm font-bold">{tag}</span>
            )}
            <RichText className="mx-auto text-center" data={richText} enableGutter={false} />
          </div>
        )}
        <div className="grid grid-cols-1 gap-md lg:grid-cols-2">
          {baseFeatures && (
            <div className="w-full space-y-md rounded-3xl bg-background p-lg">
              <div className="flex flex-col">
                <h3 className="text-h5 font-bold text-foreground-primary">
                  {baseFeatures.heading}
                </h3>
                <RichText
                  className="prose-p:text-body-l m-0"
                  data={baseFeatures.content as any}
                  enableGutter={false}
                />
              </div>
              <ul className="grid w-full grid-cols-1 gap-sm md:grid-cols-2 lg:grid-cols-1">
                {baseFeatures?.features?.map((item) => (
                  <li key={item.id} className="flex flex-row items-center gap-4 rounded-lg">
                    {item.icon && (
                      <div className="inline-flex w-fit rounded-full bg-zad-beige p-3">
                        <Icon
                          icon={`ri:${item.icon}`}
                          className="text-2xl leading-none text-foreground-primary"
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <p className="text-body-l font-bold text-foreground-primary">
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
            <div className="w-full space-y-md rounded-3xl bg-zad-green p-lg" data-theme="dark">
              <div className="flex flex-col">
                <h3 className="text-h5 me-lg font-bold text-foreground-primary">
                  {additionalFeatures.heading}
                </h3>
                <RichText
                  className="prose-p:text-body-l m-0"
                  data={additionalFeatures.content as any}
                  enableGutter={false}
                />
              </div>
              <ul className="grid w-full grid-cols-1 gap-sm sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-1">
                {additionalFeatures?.features?.map((item) => (
                  <li key={item.id} className="flex flex-row items-center gap-4 rounded-lg">
                    {item.icon && (
                      <div className="inline-flex w-fit rounded-full bg-zad-gold p-3">
                        <Icon
                          icon={`ri:${item.icon}`}
                          className="text-2xl leading-none text-zad-green"
                        />
                      </div>
                    )}
                    <div className="me-4 flex flex-col">
                      <p className="text-body-l font-bold text-foreground-primary">
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
        </div>
      </div>
    </div>
  )
}
