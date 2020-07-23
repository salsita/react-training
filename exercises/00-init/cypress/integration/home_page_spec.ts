import { USER_LIST } from '../support/constants'

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('h1', USER_LIST.header)
    cy.contains('Hello React!')
  })
})
