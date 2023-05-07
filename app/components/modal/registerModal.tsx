'use client'
import { FC, LegacyRef, useRef } from 'react'
import { supabase } from '../../libs/supabase'
import { Register } from '@/app/libs/auth/userSignUp'

interface registerModalProps {
  
}

const registerModal: FC<registerModalProps> = ({}) => {
  const crypto = require('crypto')
  const firstnameField = useRef<HTMLInputElement>()
  const lastnameField = useRef<HTMLInputElement>()
  const contactnumberField = useRef<HTMLInputElement>()
  const emailField = useRef<HTMLInputElement>()
  const usernameField = useRef<HTMLInputElement>()
  const passwordField = useRef<HTMLInputElement>()
  const hashConvert = (pass: string) => {
    const hash = crypto.createHash('sha256');
    hash.update(pass);
    return hash.digest('hex');
  }

  const handleSignUp = async () => {
    if (firstnameField.current?.value === '') {
      alert('Please fill up the First Name field')
    }
    else if (lastnameField.current?.value === '') {
      alert('Please fill up the Last Name field')
    }
    else if (contactnumberField.current?.value === '') {
      alert('Please fill up the Contact Number field')
    }
    else if (emailField.current?.value === '') {
      alert('Please fill up the Email field')
    }
    else if (usernameField.current?.value === '') {
      alert('Please fill up the Username field')
    }
    else if (passwordField.current?.value === '') {
      alert('Please fill up the Password field')
    }
    else {
      const hash = crypto.createHash('sha256')
      const firstName = (firstnameField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      const lastName = (lastnameField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      const contactNo = (contactnumberField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      const email = (emailField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      const username = (usernameField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      const passwordRaw = (passwordField.current?.value ?? '').replace(/[^a-zA-Z0-9]/g, "")
      alert('Success')
      if (passwordRaw) {
        let password = hashConvert(passwordRaw)
        Register({
          firstName,
          lastName,
          contactNo,
          email,
          username,
          password 
        })
        
      }
    }
  }
  return (
    <>
      <div className='
      w-1/2
      flex
      flex-row
      justify-center
      items-center
      '>
        <div className='
        flex
        flex-col
        justify-center
        items-center
        w-1/2
        '>
        <input ref={firstnameField as LegacyRef<HTMLInputElement>} type="text" placeholder='First Name'/>
        <input ref={lastnameField as LegacyRef<HTMLInputElement>} type="text" placeholder='Last Name'/>
        <input ref={contactnumberField as LegacyRef<HTMLInputElement>} type="text" placeholder='Contact Number'/>
        <input ref={emailField as LegacyRef<HTMLInputElement>} type="text" placeholder='Email'/>
        <input ref={usernameField as LegacyRef<HTMLInputElement>} type="text" placeholder='Username'/>
        <input ref={passwordField as LegacyRef<HTMLInputElement>} type="text" placeholder='Password'/>
        <button onClick={() => {handleSignUp()}}>sign up</button>
        </div>
      </div>
    </>
  )
}

export default registerModal

function signUp(arg0: { variables: {} }) {
  throw new Error('Function not implemented.')
}
