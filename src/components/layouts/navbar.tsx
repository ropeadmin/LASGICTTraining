'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

// ** Store
import { logout } from '@/store/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const getCurrentUser = useSelector((state: RootState) => state.auth.email)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(logout())
    router.push("/sign-in")
  }

  return (
    <nav className='fixed h-[120px] flex-between z-50 w-full px-10 py-4 lg:px-[198px] bg-white  transform -translate-x-1/2 left-1/2 drop-shadow-sm'>
      <Link href={"/"} className='flex items-center gap-1'>
        <Image
          src={"/icons/logo.svg"}
          alt='logo'
          width={90}
          height={90}
          className='max-sm:size-10'
        />
      </Link>
      
      {
        getCurrentUser ? (
          <div>
            <Button className='outline text-black-1 hover:outline-none hover:bg-[#809ebc]' variant={"outline"}  onClick={handleLogout}>
              Log out
            </Button>
          </div>
        ) : (
          <div className="flex-between gap-5">
            <Button className='outline  hover:outline-none hover:bg-[#E2E5E8]' variant="outline" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button className='' asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar