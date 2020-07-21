import { USER_LIST } from './utils/constants'

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('h1', USER_LIST.header)

    cy.contains('button', USER_LIST.addAryaButton)
    cy.contains('button', USER_LIST.addDaenerysButton)

    cy.contains('thead', 'First Name').contains('thead', 'Last Name')
    cy.contains('tbody', 'No Users')
  })


  it('adds users', () => {
    cy.visit('/')

    // add multiple users
    cy.contains(USER_LIST.addAryaButton).click()
    cy.contains(USER_LIST.addDaenerysButton).click()
    cy.contains(USER_LIST.addAryaButton).click()

    // check that the table contains the expected number of users
    cy.get('tbody tr').should('have.length', 3)

    // check that all users are added
    cy.get('tbody').within(() => {
      cy.get('tr').eq(0).contains('tr', USER_LIST.aryaFirstName).contains('tr', USER_LIST.aryaLastName)
      cy.get('tr').eq(1).contains('tr', USER_LIST.daenerysFirstName).contains('tr', USER_LIST.daenerysLastName)
      cy.get('tr').eq(2).contains('tr', USER_LIST.aryaFirstName).contains('tr', USER_LIST.aryaLastName)
    })
  })
})
