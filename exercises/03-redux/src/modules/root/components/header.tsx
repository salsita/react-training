import React from 'react'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => <h1>{title}</h1>
