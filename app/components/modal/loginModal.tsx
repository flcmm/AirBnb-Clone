import { FC } from 'react'
import Button from '../button'

interface loginModalProps {

}

const UserModal: FC<loginModalProps> = ({}) => {
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

export default UserModal