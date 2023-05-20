'use client'
import Button from '../Button'
import { FC } from 'react'

interface SignInModalProps {

}

const SignInModal: FC<SignInModalProps> = ({}) => {
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

export default SignInModal