import { Media } from '@/payload-types'
import clsx from 'clsx'
import React from 'react'

interface Props {
  logo?: string | Media | null
  loading?: 'eager' | 'lazy'
  priority?: 'high' | 'low'
  className?: string
}

export const Logo: React.FC<Props> = (props) => {
  const { logo, loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  // Default logo URL if no custom logo is provided
  const defaultLogoUrl = '/logo.svg' // You'll need to add your default logo to the public directory

  // Handle both string and Media object cases
  const logoUrl = typeof logo === 'string' ? logo : logo?.url || defaultLogoUrl

  return (
    <img
      alt="Site Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px] object-contain', className)}
      src={logoUrl}
    />
  )
}
