'use client'
import { FC, LegacyRef, useRef } from 'react'
import { supabase } from '../../libs/supabase'
import { Register } from '@/app/libs/auth/userSignUp'
import Input from '../input/input'

interface registerModalProps {
  
}

const RegisterModal: FC<registerModalProps> = ({}) => {
  const crypto = require('crypto')
  const nameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const hashConvert = (pass: string) => {
    const hash = crypto.createHash('sha256');
    hash.update(pass);
    return hash.digest('hex');
  }

  const handleSignUp = async () => {
    if (nameField.current?.value === '') {
      alert('Please fill up the Last Name field')
    }
    else if (emailField.current?.value === '') {
      alert('Please fill up the Email field')
    }
    else if (passwordField.current?.value === '') {
      alert('Please fill up the Password field')
    }
    else {
      const hash = crypto.createHash('sha256')
      const name = (nameField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      const email = (emailField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      const passwordRaw = (passwordField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      alert('Success')
      if (passwordRaw) {
        let password = hashConvert(passwordRaw)
        Register({
          name: name,
          email: email,
          password: password
        })
      }
    }
  }
  return (
    <>
        <div className='
        flex
        bg-slate-100
        rounded-lg
        flex-row
        gap-5
        justify-center
        items-center
        w-1/2
        p-5
        '>
          <div>
            <h1 className='font-bold '>Welcome to AirBNB</h1>
            <p>Please signup to continue</p>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3 justify-center items-center'>
              <Input ref={nameField} className='border-black focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='text' placeholder='Name' required={true}/>
    
            </div>
            <div className='flex flex-row gap-3 justify-center items-center'>
              <Input ref={emailField} className='border-black focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='email' placeholder='Email' required={true}/>
            </div>
            <div className='flex flex-row gap-3 justify-center items-center'>
              <Input ref={passwordField} className='border-black focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='password' placeholder='Password' required={true}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default RegisterModal
