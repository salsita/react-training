import React from 'react'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: { title: string }): React.ReactElement => {
  return <h1>{title}</h1>
}
