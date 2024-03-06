import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}

export function Button({ children }: ButtonProps) {
  return <button type='button'>{children}</button>
}
