import { FC } from 'react'
import Button from '../button'

interface loginModalProps {
  mode: 'login' | 'register'
}

const UserModal: FC<loginModalProps> = ({mode}) => {
  if (mode === 'login') {
    return (
      <>
        <div className='w-full h-screen blur'>
          <div className='w-1/2 rounded-lg'>
            <Button text='Log In'/>
          </div>
        </div>
      </>
    )
  }
  else {
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
}

export default UserModal