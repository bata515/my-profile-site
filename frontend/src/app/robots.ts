import { MetadataRoute } from 'next'
import { SITE_METADATA } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_METADATA.siteUrl}/sitemap.xml`,
  }
}