'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // set --header-height
  useEffect(() => {
    if (typeof window === 'undefined') return

    function setHeight() {
      if (!ref.current) return
      document.documentElement.style.setProperty(
        '--header-height',
        `${ref.current.offsetHeight ?? 0}px`,
      )
    }
    setHeight()
    window.addEventListener('resize', setHeight)

    return () => window.removeEventListener('resize', setHeight)
  }, [])

  return (
    <header
      ref={ref}
      className="sticky top-0 z-20 w-full bg-zad-green"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="section flex items-center justify-between py-4">
        <Link href="/">
          <Logo loading="eager" priority="high" className="" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
