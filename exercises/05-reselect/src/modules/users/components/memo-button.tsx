import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const MemoButton: React.FC<ButtonProps> = React.memo((props) => {
  return <button {...props}></button>
})
