'use client'
import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill,
  GiPalmTree,
  GiPisaTower,
  GiSurfBoard
} from 'react-icons/gi';
import { AiOutlineFire } from 'react-icons/ai';
import { FaSkiing } from 'react-icons/fa';
import { GrKey } from 'react-icons/gr';
import { BsSnow } from 'react-icons/bs';
import {
  MdOutlineVilla,
  MdCabin,
  MdSportsGolf
} from 'react-icons/md';
import FilterBox from './FilterBox';

export const categories = [
  {
    label: 'Mountains',
    icon: TbMountain,
    description: 'Mountains Property'
  },
  {
    label: 'Surfing',
    icon: GiSurfBoard,
    description: 'Surfing Property'
  },
  {
    label: 'Iconic Cities',
    icon: GiPisaTower,
    description: 'Iconic Cities Property'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'Cave Property'
  },
  {
    label: 'Ski In/Out',
    icon: FaSkiing,
    description: 'Ski In/Out Property'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'Arctic Property'
  },
  {
    label: 'Trending',
    icon: AiOutlineFire,
    description: 'Trending Property'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Island Property'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'Windmills Property'
  },
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'BeachFront Property'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'Pools Property'
  },
  {
    label: 'Tropical',
    icon: GiPalmTree,
    description: 'Tropical Property'
  },
  {
    label: 'Cabins',
    icon: MdCabin,
    description: 'Cabins Property'
  },
  {
    label: 'Farms',
    icon: GiBarn,
    description: 'Farms Property'
  },
  {
    label: 'Tiny Homes',
    icon: MdOutlineVilla,
    description: 'Tiny Homes Property'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Desert Property'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Camping Property'
  },
  {
    label: 'New',
    icon: GrKey,
    description: 'New Property'
  },
  {
    label: 'Boats',
    icon: GiBoatFishing,
    description: 'Boats Property'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'Castles Property'
  }
]

const FiltersComponent = () => {
  const currentPathName = usePathname()
  const mainPage = currentPathName === '/'
  if (!mainPage)
    return null
  // this is a list of icons that will be displayed on the filter pane
  return (
    <>
      <div className='flex flex-row gap-8 max-w-full w-full overflow-hidden px-5 pt-5'>
        {/* this block of code loops over the list of filtersLsit which then creates a div every loops */}
        {
          categories.map((category, index) => {
            return (
              <FilterBox
                key={index}
                label={category.label}
                icon={category.icon}
                description={category.description}
              />
            )
          }, [])
        }
      </div>
    </>
  )
}

export default FiltersComponent