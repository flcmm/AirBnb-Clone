'use client'
import { FC, MutableRefObject } from 'react'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // custom properties goes inside here
  disabled?: boolean
  notAllowed?: boolean,
  className: string,
  text: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<buttonProps> = ({disabled, text, onClick, className, notAllowed}: buttonProps) => {
  return <button onClick={onClick} className={className} disabled={disabled}>{text}</button>
}

export default Button