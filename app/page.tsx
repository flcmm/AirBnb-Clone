import React from 'react'
import Navigation from './components/navigation'
import Filters from './components/filterpane/filters'
import Modals from './components/modals'

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
