"use client";

import { Language, Translation } from '@/utils/types/language'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const navbarLinks = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Schedule',
    href: '/schedule'
  },
  {
    label: 'Prayers',
    href: '/prayers'
  },
  {
    label: 'Settings',
    href: '/settings'
  }
]

const Navbar = ({
  lang,
  translations 
}: {
  lang: Language,
  translations: Translation 
}) => {
  const pathname = usePathname();

  const currentPath = () => {
    const currentPath = pathname.split(`/${lang}`)[1];
    if (currentPath === "") {
      return "/";
    }
    return currentPath;
  };

  return (
    <div className='fixed bottom-3 left-1/2 -translate-x-1/2 w-fit bg-[var(--border)]/80 backdrop-blur rounded-3xl py-2 px-4 shadow-2xl border-[var(--border)]'>
      <ul className='flex items-center justify-evenly gap-4'>
        {navbarLinks.map((link) => (
          <li
            key={link.href}
            className={`${link.href === currentPath() ? 'bg-[var(--foreground)] text-[var(--background)]' : ''} rounded-full px-2 py-1`}
          >
            <Link
              href={`/${lang}${link.href === "/" ? "" : link.href}`}
            >
              {translations?.navbarLinks[link.label.toLowerCase() as keyof typeof translations.navbarLinks]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar