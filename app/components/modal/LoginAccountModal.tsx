'use client'
import Button from '../ButtonComponent'
import { FC } from 'react'

interface SignInModalProps {

}

const LoginAcccountModal: FC<SignInModalProps> = ({}) => {
    return (
      <>
        <div className='w-full h-screen blur'>
          <div className='w-1/2 rounded-lg'>
            <Button text='Sign Up'/>
          </div>
        </div>
      </>
    )
}

export default LoginAcccountModal