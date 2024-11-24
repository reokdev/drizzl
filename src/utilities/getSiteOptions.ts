import { getCachedGlobal } from './getGlobals'
import type { SiteOptionsType } from '@/globals/siteOptions/types'

const fetchSiteOptions = async () => {
  return await getCachedGlobal('site-options', 1)()
}

const typeSiteOptions = (siteOptionsData: Partial<SiteOptionsType> = {}): SiteOptionsType => {
  return {
    id: siteOptionsData?.id || 'default',
    siteName: siteOptionsData?.siteName || 'Drizzl CMS',
    contact: siteOptionsData?.contact || {},
    social: siteOptionsData?.social || {},
    seo: siteOptionsData?.seo || {},
    createdAt: siteOptionsData?.createdAt || new Date().toISOString(),
    updatedAt: siteOptionsData?.updatedAt || new Date().toISOString(),
  }
}

export async function getSiteOptions(): Promise<SiteOptionsType> {
  const siteOptionsData = await fetchSiteOptions()
  const siteOptions = typeSiteOptions(siteOptionsData)

  return siteOptions
}