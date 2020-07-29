import React from 'react'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>
}

/////////////////////////////////////////////////////////////
// Additional Exercises

// 1. Header component created as a class that extends React.Component

// export class Header extends React.Component<HeaderProps> {
//   render() {
//     console.log('Header.render');
//     return <h1>{this.props.title}</h1>;
//   }
// }

// 2. Header component created as a class that extends React.PureComponent

// export class Header extends React.PureComponent<HeaderProps> {
//   render() {
//     console.log('Header.render');
//     return <h1>{this.props.title}</h1>;
//   }
// }
