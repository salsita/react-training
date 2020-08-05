import React from 'react'

import { useSelector } from 'react-redux'
import { getTitle } from 'modules/users/users-selectors'

export const Header: React.FC = () => {
  const title = useSelector(getTitle)

  return <h1>{title}</h1>
}
