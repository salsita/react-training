import React from 'react'

import { connect } from 'react-redux'

interface HeaderProps {
  title: string
}

const mapStateToProps = (state) => ({
  title: state.users.title,
})

// export const Header: React.FC<HeaderProps> = ({ title }) => <h1>{title}</h1>

export const Header = connect(mapStateToProps)(({ title }) => <h1>{title}</h1>)
