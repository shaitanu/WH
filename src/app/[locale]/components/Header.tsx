'use client'
import { Link } from '@/src/navigation'
import { FC } from 'react'
import Image from 'next/image'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />

        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            About Us
          </Link>
        </nav>
      </div>
    </div>
  )
}
