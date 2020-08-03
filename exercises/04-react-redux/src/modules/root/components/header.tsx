import React from 'react'

import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../root-reducer'

const mapStateToProps = (state: RootState) => ({
  title: state.users.title,
})

const connector = connect(mapStateToProps)

// infer the props from Redux
type HeaderPropsFromRedux = ConnectedProps<typeof connector>

export const Header = connector(({ title }: HeaderPropsFromRedux) => (
  <h1>{title}</h1>
))
