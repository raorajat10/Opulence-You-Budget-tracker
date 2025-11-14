import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-white-100/80 backdrop-blur-md z-50 border-b'> 
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href="/">
        <Image src={'/new-logo.png'} width={200} height={60} alt="Logo"
        className='h-12 w-auto object-contain'/></Link>
          
     <div>   <SignedOut>
              <SignInButton forceRedirectUrl='/dashboard'>
                <Button variant='outline'>Log In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href={"/dashboard"} className='text-gray-600 hover:text-yellow-200'>
                <Button variant='outline'>
                  <LayoutDashboard size={18}/>
                  <span className='hidden md:inline'>Dashboard</span>
                </Button>
              </Link>
              <Link href={"/transaction/create"}>
                <Button variant='outline'>
                  <LayoutDashboard size={18}/>
                  <span className='hidden md:inline'>Dashboard</span>
                </Button>
              </Link>
            </SignedIn>

            <SignedIn>
              <UserButton/>
            </SignedIn></div>
            
             </nav>
            </div>
  )
}

export default Header