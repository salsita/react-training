import { userList } from '../support/constants'

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('h1', userList.header)
    cy.contains('Hello React!')
  })
})
