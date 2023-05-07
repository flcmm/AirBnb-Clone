import { FC } from 'react'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // custom properties goes inside here
  disabled?: boolean
  text: string
  onClick?: () => void
}

const Button: FC<buttonProps> = ({disabled, text, ...props}) => {
  return <button disabled>{text}</button>
}

export default Button