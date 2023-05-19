import { FC } from 'react'
import { IconType } from 'react-icons'

interface FilterBoxProps {
  selected?: boolean,
  icon: IconType,
  label: string
}

const FilterBox: FC<FilterBoxProps> = ({selected, label}) => {
  return (
    <>
      <div className={`flex flex-col cursor-pointer justify-center items-center ${selected ? 'bg-gray-300' : 'bg-white'}`}>
        <h1 className={`${selected ? 'text-black' : 'text-gray-300'}`}>{label}</h1>
      </div>
    </>
  )
}

export default FilterBox