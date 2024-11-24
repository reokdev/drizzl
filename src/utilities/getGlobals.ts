import type { Footer, Header } from '@/payload-types'
import type { SiteOptionsType } from '@/globals/siteOptions/types'
import { cache } from 'react'

type GlobalSlug = 'header' | 'footer' | 'site-options'

type DataFromGlobalSlug<T extends GlobalSlug> = T extends 'header'
  ? Header
  : T extends 'footer'
  ? Footer
  : T extends 'site-options'
  ? Partial<SiteOptionsType>
  : never

export const getCachedGlobal = <T extends GlobalSlug>(slug: T, depth: number = 1) => {
  return cache(async (): Promise<DataFromGlobalSlug<T>> => {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/${slug}?depth=${depth}`
    const res = await fetch(url, {
      next: {
        revalidate: process.env.VERCEL_ENV === 'preview' ? 0 : 300,
        tags: [`globals_${slug}`],
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch global "${slug}"`)
    }

    const data = await res.json()
    return data
  })
}