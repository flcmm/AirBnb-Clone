import React, { FC, MutableRefObject, RefObject } from 'react'

interface inputProps {
  disabled: boolean,
  type: string,
  placeholder?: string,
  required: boolean,
  className: string,
  inputRef: MutableRefObject<HTMLInputElement | null>;
}


const Input: FC<inputProps> = (
    {
      disabled,
      type,
      placeholder,
      required,
      className,
      inputRef
    }: inputProps
  ) => {
  return (
    <>
      <div className=''>
        <input ref={inputRef} className={className} placeholder={placeholder} type={type} disabled={disabled} required={required}/>
      </div>
    </>
  )
}

export default Input