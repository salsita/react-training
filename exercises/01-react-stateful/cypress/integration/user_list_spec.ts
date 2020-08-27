import { userList } from '../support/constants'

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('h1', userList.header, { matchCase: false })

    cy.contains('button', userList.addAryaButton, { matchCase: false })
    cy.contains('button', userList.addDaenerysButton, { matchCase: false })

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
    cy.contains(userList.addAryaButton, { matchCase: false }).click()
    cy.contains(userList.addDaenerysButton, { matchCase: false }).click()
    cy.contains(userList.addAryaButton, { matchCase: false }).click()

    // check that the table contains the expected number of users
    cy.get('tbody tr').should('have.length', 3)

    // check that all users are added
    cy.get('tbody').within(() => {
      cy.get('tr')
        .eq(0)
        .contains('tr', userList.aryaFirstName, { matchCase: false })
        .contains('tr', userList.aryaLastName, { matchCase: false })
      cy.get('tr')
        .eq(1)
        .contains('tr', userList.daenerysFirstName, { matchCase: false })
        .contains('tr', userList.daenerysLastName, { matchCase: false })
      cy.get('tr')
        .eq(2)
        .contains('tr', userList.aryaFirstName, { matchCase: false })
        .contains('tr', userList.aryaLastName, { matchCase: false })
    })
  })
})
