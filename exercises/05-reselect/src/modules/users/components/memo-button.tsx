import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const MemoButton = React.memo((props: ButtonProps) => {
  return <button {...props}></button>
})
