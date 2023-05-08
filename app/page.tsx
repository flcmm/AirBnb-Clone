import React from 'react'
import Navigation from './components/navigation'
import Button from './components/button'
import Filters from './components/filterpane/filters'
import RegisterModal from './components/modal/signupModal'

export default function Home() {
  return (
    <>
      <div className=''>
        <Navigation />
        <Filters />
        <RegisterModal />
      </div>
    </>
  )
}
