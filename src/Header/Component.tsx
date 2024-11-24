import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)()
  
  // Ensure we have a valid Header object with required fields
  const header: Header = {
    id: headerData?.id || 'default',
    logo: headerData?.logo || '/logo.svg', // Provide default logo path
    navItems: headerData?.navItems || [],
    createdAt: headerData?.createdAt || new Date().toISOString(),
    updatedAt: headerData?.updatedAt || new Date().toISOString(),
  }

  return <HeaderClient header={header} />
}
