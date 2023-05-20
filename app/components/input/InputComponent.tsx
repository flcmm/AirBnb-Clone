import React, { FC, MutableRefObject, RefObject } from 'react'

interface inputProps {
  disabled: boolean,
  type: string,
  placeholder?: string,
  required: boolean,
  className: string,
  inputRef: MutableRefObject<HTMLInputElement | null>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputComponent: FC<inputProps> = (
    {
      disabled,
      type,
      placeholder,
      required,
      className,
      inputRef,
      onChange
    }: inputProps
  ) => {
  return (
    <>
      <div className=''>
        <input onChange={onChange} ref={inputRef} className={className} placeholder={placeholder} type={type} disabled={disabled} required={required}/>
      </div>
    </>
  )
}

export default InputComponent