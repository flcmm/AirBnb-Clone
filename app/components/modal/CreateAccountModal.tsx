'use client'
import { FC, LegacyRef, useRef, ChangeEvent } from 'react'
import { supabase } from '../../libs/supabase'
import { Register } from '@/app/libs/auth/userSignUp'
import InputComponent from '../input/InputComponent'
import ButtonComponent from '../ButtonComponent'
import { CgCloseR } from 'react-icons/cg'

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

  const validateName = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.value.length <= 3) {
      alert('Name should be 3 characters long');
    }
  }
  const validateEmail = (email: string) => {
    const pattern = /^[\w\.-]+@[\w\.-]+\.\w+$/
    return pattern.test(email)
  }

  const handleSignUp = () => {
    const userMail = emailField.current?.value ?? ''
    console.log(userMail);
    
    const validEmail: boolean = validateEmail(userMail)
    console.log(validEmail);
    
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
      if (!validEmail) {
        alert('Please enter a valid email')
      }
      else {
        const hash = crypto.createHash('sha256')
        const name = (nameField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
        const email = (emailField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
        const passwordRaw = (passwordField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
        alert('Success')
        // if (passwordRaw) {
        //   let password = hashConvert(passwordRaw)
        //   Register({
        //     name: name,
        //     email: email,
        //     password: password
        //   })
        // }
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
          <div className='w-full flex flex-row justify-between items-center'>
            <div>
              <h1 className='font-bold text-2xl'>Welcome to AirBNB</h1>
              <p className='text-sm'>Please signup to continue</p>
            </div>
            <CgCloseR className='cursor-pointer' size={20} color='#FF5A5F' onClick={() => {console.log('Clicked!')}}/>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <div>
            <InputComponent onChange={validateName} inputRef={nameField} className='border-black w-full focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='text' placeholder='Name' required={true}/>
            <p ></p>
            </div>
            <InputComponent inputRef={emailField} className='border-black w-full focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='email' placeholder='Email' required={true}/>
            <InputComponent inputRef={passwordField} className='border-black w-full focus:border-2 border-[1px] outline-none rounded-lg p-2' disabled={false} type='password' placeholder='Password' required={true}/>
            <ButtonComponent onClick={handleSignUp} text='Sign Up' className='rounded-md w-full bg-[#FF5A5F] p-3'/>
          </div>
          <div className='flex flex-row gap-2 justify-start w-full'>
            <h1 className='text-sm'>Already have an account?</h1>
            <h1 className='cursor-pointer font-medium text-sm text-[#FF5A5F]'>Sign In</h1>
          </div>
        </div>
    </>
  )

  console.log(nameField);
  
}

export default CreateAccountModal