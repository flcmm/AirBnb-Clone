import { FC } from 'react'
import LoginAcccountModal from './modal/LoginAccountModal'
import CreateAccountModal from './modal/CreateAccountModal'
interface modalsProps {
  hidden: boolean,
  mode: string
}

const Modals: FC<modalsProps> = ({hidden, mode}) => {
  return (
    <>
      <div className={`${hidden ? 'none' : 'block backdrop-blur'} bg-black/50 w-full flex justify-center items-center h-screen z-100 absolute top-0`}>
        {mode === 'login' ? <LoginAcccountModal /> : <CreateAccountModal />}
      </div>
    </>
  )
}

export default Modals