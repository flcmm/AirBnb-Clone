import React from 'react'
import Navigation from './components/NavigationBar'
import Filters from './components/filterpane/Filters'
import Modals from './components/ModalCcontainer'

export default function Home() {
  return (
    <>
      <div className='relative w-full'>
        <Navigation />
        <Filters />
        <Modals hidden={false} mode='signup' />
      </div>
    </>
  )
}
