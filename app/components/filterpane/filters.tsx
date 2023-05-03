'use client'
import { FC } from 'react'
import Image from 'next/image'
import Tropical from './filter-icons/tropical.png'
import AmazingPools from './filter-icons/amazing-pools.png'
import Beachfront from './filter-icons/beachfront.png'
import Privaterooms from './filter-icons/private-rooms.png'
import AmazingViews from './filter-icons/amazing-views.png'
import TinyHomes from './filter-icons/tiny-homes.png'
import Design from './filter-icons/design.png'
import Lake from './filter-icons/lake.png'
import Camping from './filter-icons/camping.png'
import TreeHouses from './filter-icons/tree-houses.png'
import Trending from './filter-icons/trending.png'
import Cabins from './filter-icons/cabins.png'

interface filterProps {
  
}

const Filters: FC<filterProps> = ({}) => {
  // this is a list of filters that will be displayed on the filter pane
  const filtersList = ['Beachfront', 'Amazing pools', 'Private rooms', 'Tropical', 'Amazing views', 'Tiny homes', 'Design', 'Lake', 'Camping', 'Treehouses', 'Trending', 'Cabins']
  // this is a list of icons that will be displayed on the filter pane
  const filtersIcons = [Beachfront, AmazingPools, Privaterooms, Tropical, AmazingViews, TinyHomes, Design, Lake, Camping, TreeHouses, Trending, Cabins]
  return (
    <>
      <div className='flex flex-row gap-8 w-full px-5 pt-5'>
        {/* this block of code loops over the list of filtersLsit which then creates a div every loops */}
        {filtersList.map((filter, index) => (
          <div key={index} className='flex flex-col items-center justify-center gap-2'>
            {/* we're looping to the variable filterIcons */}
            <Image src={filtersIcons[index]} alt={filter} width={35} height={35} />
            <p className='text-[13px]'>{filter}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Filters