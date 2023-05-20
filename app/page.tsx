import React from 'react'
import Navigation from './components/NavigationBar'
import Modals from './components/ModalContainer'
import FiltersComponent from './components/filterpane/FiltersComponent'

export default function Home() {
  return (
    <>
      <div className='relative w-full'>
        <Navigation />
        <FiltersComponent />
        <Modals hidden={false} mode='signup' />
      </div>
    </>
  )
}
