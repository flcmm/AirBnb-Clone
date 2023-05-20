'use client'
import { FC, LegacyRef, useRef } from 'react'
import { supabase } from '../../libs/supabase'
import { Register } from '@/app/libs/auth/userSignUp'
import InputComponent from '../input/InputComponent'
import Button from '../Button'

interface SignUpModalProps {
  
}

const CreateAccountModal: FC<SignUpModalProps> = ({}) => {
  const crypto = require('crypto')
  const nameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const signupButton = useRef<HTMLButtonElement>(null)
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
        flex-col
        gap-5
        p-7
        w-3/12
        justify-center
        items-center
        '>
          <div className='w-full flex flex-row justify-between'>
            <div>
              <h1 className='font-bold text-2xl'>Welcome to AirBNB</h1>
              <p className='text-sm'>Please signup to continue</p>
            </div>
            <svg className='w-1/12 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#FF5A5F"/>
              <path d="M13.0594 12.0001L15.3594 9.70011C15.6494 9.41011 15.6494 8.93011 15.3594 8.64011C15.0694 8.35011 14.5894 8.35011 14.2994 8.64011L11.9994 10.9401L9.69937 8.64011C9.40937 8.35011 8.92937 8.35011 8.63938 8.64011C8.34938 8.93011 8.34938 9.41011 8.63938 9.70011L10.9394 12.0001L8.63938 14.3001C8.34938 14.5901 8.34938 15.0701 8.63938 15.3601C8.78938 15.5101 8.97937 15.5801 9.16937 15.5801C9.35937 15.5801 9.54937 15.5101 9.69937 15.3601L11.9994 13.0601L14.2994 15.3601C14.4494 15.5101 14.6394 15.5801 14.8294 15.5801C15.0194 15.5801 15.2094 15.5101 15.3594 15.3601C15.6494 15.0701 15.6494 14.5901 15.3594 14.3001L13.0594 12.0001Z" fill="#292D32"/>
            </svg>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <InputComponent inputRef={nameField} className='border-black w-full focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='text' placeholder='Name' required={true}/>
            <InputComponent inputRef={emailField} className='border-black w-full focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='email' placeholder='Email' required={true}/>
            <InputComponent inputRef={passwordField} className='border-black w-full focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='password' placeholder='Password' required={true}/>
            <Button onClick={handleSignUp} text='Sign Up' className='rounded-md w-full bg-[#FF5A5F] p-3'/>
          </div>
          <div className='flex flex-row gap-2 justify-start w-full'>
            <h1 className='text-sm'>Already have an account?</h1>
            <h1 className='cursor-pointer font-medium text-sm text-[#FF5A5F]'>Sign In</h1>
          </div>
        </div>
    </>
  )
}

export default CreateAccountModal