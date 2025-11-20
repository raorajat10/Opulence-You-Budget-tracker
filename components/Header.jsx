import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
  return (
    <div className="
      fixed top-4 left-1/2 -translate-x-1/2
      w-full max-w-6xl
      backdrop-blur-xl bg-[#152517]/60
      border border-[#316959]/40 shadow-lg
      z-50 rounded-2xl px-6
    ">
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        
        <Link href="/">
          <h1 className="text-[#5bb66e] text-xl md:text-2xl font-bold">
            Opulence
          </h1>
        </Link>

        <div className='flex items-center space-x-4'>   

          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant='outline' className="border-[#5bb66e] text-[#5bb66e] hover:bg-[#5bb66e] hover:text-white">
                Log In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href={"/dashboard"}>
              <Button 
                variant='outline' 
                className="text-[#316959] border-[#316959] hover:bg-[#316959] hover:text-white"
              >
                <LayoutDashboard size={18}/>
                <span className='font-semibold hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction/create"}>
              <Button className='bg-[#5bb66e] text-white hover:bg-[#0d5c42]'>
                <PenBox size={18}/>
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatar: "w-10 h-10 border-4 border-[#5bb66e]"
                }
              }}
            />
          </SignedIn>

        </div>
      </nav>
    </div>
  )
}

export default Header
