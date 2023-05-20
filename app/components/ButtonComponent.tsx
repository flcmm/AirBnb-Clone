'use client'
import { FC, MutableRefObject } from 'react'

interface ButtonComponentProps extends React.HTMLAttributes<HTMLButtonElement> {
  // custom properties goes inside here
  disabled?: boolean
  notAllowed?: boolean,
  className?: string,
  text: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonComponent: FC<ButtonComponentProps> = ({disabled, text, onClick, className, notAllowed}) => {
  return <button onClick={onClick} className={className} disabled={disabled}>{text}</button>
}

export default ButtonComponent