import React from 'react'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>
}
