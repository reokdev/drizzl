import { getCachedGlobal } from '@/utilities/getGlobals'
import { getSiteOptions } from '@/utilities/getSiteOptions'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  const siteOptions = await getSiteOptions()
  
  // Ensure we have a valid Footer object with required fields
  const footer: Footer = {
    id: footerData?.id || 'default',
    logo: footerData?.logo || '/logo.svg', // Provide default logo path
    navItems: footerData?.navItems || [],
    createdAt: footerData?.createdAt || new Date().toISOString(),
    updatedAt: footerData?.updatedAt || new Date().toISOString(),
  }

  const socialIcons = {
    twitter: <FaTwitter size={18} />,
    facebook: <FaFacebook size={18} />,
    instagram: <FaInstagram size={18} />,
    linkedin: <FaLinkedin size={18} />,
  }

  return (
    <footer className="border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 flex flex-col gap-8">
        {/* Top row with logo, email, and navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link className="flex items-center" href="/">
              <Logo logo={footer.logo} className="invert dark:invert-0" />
            </Link>
            {siteOptions.contact?.email && (
              <a 
                href={`mailto:${siteOptions.contact.email}`}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {siteOptions.contact.email}
              </a>
            )}
          </div>

          <nav className="flex flex-col md:flex-row gap-4">
            {footer.navItems?.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>

        {/* Bottom row with address, social icons, and theme selector */}
        <div className="grid grid-cols-3 items-center">
          {/* Left: Address */}
          <div className="justify-self-start">
            {siteOptions.contact?.address && (
              <address className="text-sm text-gray-300 not-italic whitespace-pre-line">
                {siteOptions.contact.address}
              </address>
            )}
          </div>

          {/* Center: Social Icons */}
          <div className="justify-self-center">
            {siteOptions.social && Object.entries(siteOptions.social).some(([_, url]) => url) && (
              <div className="flex gap-6">
                {Object.entries(siteOptions.social).map(([platform, url]) => {
                  if (!url) return null
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                      aria-label={`Visit our ${platform} page`}
                    >
                      {socialIcons[platform as keyof typeof socialIcons]}
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right: Theme Selector */}
          <div className="justify-self-end">
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  )
}
