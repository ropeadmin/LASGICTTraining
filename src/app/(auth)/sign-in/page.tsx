'use client'

import { CustomTextField } from '@/components/custom/inputs/CustomInputField/CustomInputField';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { useLoginMutation } from '@/store/features/auth/authService';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

// ** Third Party
type Inputs = {
  email: string
  password: string
}
const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation();

  const methods = useForm<Inputs>()
  const router = useRouter();
  const { toast } = useToast();
  
  const onSubmit = async (data: any) => {
    const credentials = {
      email: data.email,
      password: data.password
    }

    try {
      await login(credentials)
        .unwrap()
        .then((res: any) => (
          res.email && router.push('/', { scroll: false })
        ))
    } catch (error) {
      console.log(error)
      toast({ title: 'Invalid email or password'})
    }
  };


  return (
    <div className='pt-8 relative h-[calc(100dvh-120px)]'>
      <div className=" md:w-[480px] w-full  h-[580px] mx-auto">
        <h2 className="text-2xl text-black-1 font-bold mt-10 mb-7">Sign in</h2>
        <FormProvider {...methods}>
          <form noValidate autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
            <CustomTextField
              label="Email Address"
              type="email"
              name='email'
              placeholder="Enter email address"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              }}
            />
          
            <CustomTextField
              label="Password"
              name='password'
              placeholder="Enter password"
              type="password"
              password
              rules={{
                required: 'Password is required',
                // pattern: {
                //   value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                //   message: 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character'
                // }
              }}
            />
            <p className='text-sm text-black-1 font-medium text-right'>Forgot Password?</p>

            <Button className='w-full h-[48px] text-base text-black-1 font-medium mt-8'>{ isLoading ? "loading..." : "Sign in"}</Button>
            <div className="w-full flex justify-center">
              <Link href="/sign-up" className=" mt-4 text-sm text-[#687588] font-normal">Don’t have an account? <span className='text-black-1 text-sm font-medium'>Sign up</span></Link>
            </div>
          </form>
        </FormProvider>
       
      </div>

      {/*  */}
      <div className='w-full md:w-fit absolute bottom-10 justify-center flex items-center transform -translate-x-1/2 left-1/2 space-x-3 '>
        <p className="text-sm text-black-1 font-normal">Powered and sponsored by:</p>
        <Image
          src="/images/power_by.svg"
          alt="powered by"
          width={130}
          height={29}
          className='w-auto h-auto mt-2'
        />
      </div>
    </div>
  )
}

export default SignIn