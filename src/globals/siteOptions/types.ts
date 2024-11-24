export interface SiteOptionsType {
    id: string
    siteName: string
    contact?: {
      address?: string
      email?: string
      phone?: string
    }
    social?: {
      twitter?: string
      facebook?: string
      instagram?: string
      linkedin?: string
    }
    seo?: {
      metaTitle?: string
      metaDescription?: string
      ogImage?: {
        id: string
        url: string
      }
    }
    createdAt: string
    updatedAt: string
  }