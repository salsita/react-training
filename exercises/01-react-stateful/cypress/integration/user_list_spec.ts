import { USER_LIST } from '../support/constants'

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('h1', USER_LIST.header, { matchCase: false })

    cy.contains('button', USER_LIST.addAryaButton, { matchCase: false })
    cy.contains('button', USER_LIST.addDaenerysButton, { matchCase: false })

    cy.contains('thead', 'First Name', { matchCase: false }).contains(
      'thead',
      'Last Name',
      {
        matchCase: false,
      }
    )
    cy.contains('tbody', 'No Users')
  })

  it('adds users', () => {
    cy.visit('/')

    // add multiple users
    cy.contains(USER_LIST.addAryaButton, { matchCase: false }).click()
    cy.contains(USER_LIST.addDaenerysButton, { matchCase: false }).click()
    cy.contains(USER_LIST.addAryaButton, { matchCase: false }).click()

    // check that the table contains the expected number of users
    cy.get('tbody tr').should('have.length', 3)

    // check that all users are added
    cy.get('tbody').within(() => {
      cy.get('tr')
        .eq(0)
        .contains('tr', USER_LIST.aryaFirstName, { matchCase: false })
        .contains('tr', USER_LIST.aryaLastName, { matchCase: false })
      cy.get('tr')
        .eq(1)
        .contains('tr', USER_LIST.daenerysFirstName, { matchCase: false })
        .contains('tr', USER_LIST.daenerysLastName, { matchCase: false })
      cy.get('tr')
        .eq(2)
        .contains('tr', USER_LIST.aryaFirstName, { matchCase: false })
        .contains('tr', USER_LIST.aryaLastName, { matchCase: false })
    })
  })
})
