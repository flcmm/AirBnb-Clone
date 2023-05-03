import React from 'react'
import Navigation from './components/navigation'
import Button from './components/button'
import Filters from './components/filterpane/filters'

export default function Home() {
  return (
    <>
      <div className=''>
        <Navigation />
        <Filters />
      </div>
    </>
  )
}
