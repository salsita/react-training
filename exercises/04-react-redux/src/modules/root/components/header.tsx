import React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../root-reducer'

export const Header: React.FC = () => {
  const title = useSelector((state: RootState) => state.users.title)

  return <h1>{title}</h1>
}
