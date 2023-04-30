import { FC } from 'react'
import Logo from './navPane/logo'
import Searchbar from './navPane/searchbar'
import User from './navPane/user'

interface navigationProps {
  
}

const Navigation: FC<navigationProps> = ({}) => {
  return (
    <>
      <div className='flex flex-row justify-between w-full p-3'>
        <div className='w-[8%]'>
          <Logo />
        </div>
        <div className='w-1/4'>
          <Searchbar />
        </div>
        <div className='w-[20%]'>
          <User />
        </div>
      </div>
    </>
  )
}

export default Navigation