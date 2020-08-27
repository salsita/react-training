import { UserList } from '../support/constants'

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('h1', UserList.header, { matchCase: false })

    cy.contains('button', UserList.addAryaButton, { matchCase: false })
    cy.contains('button', UserList.addDaenerysButton, { matchCase: false })

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
    cy.contains(UserList.addAryaButton, { matchCase: false }).click()
    cy.contains(UserList.addDaenerysButton, { matchCase: false }).click()
    cy.contains(UserList.addAryaButton, { matchCase: false }).click()

    // check that the table contains the expected number of users
    cy.get('tbody tr').should('have.length', 3)

    // check that all users are added
    cy.get('tbody').within(() => {
      cy.get('tr')
        .eq(0)
        .contains('tr', UserList.aryaFirstName + ' I')
        .contains('tr', UserList.aryaLastName.toLocaleUpperCase())
      cy.get('tr')
        .eq(1)
        .contains('tr', UserList.daenerysFirstName + ' I')
        .contains('tr', UserList.daenerysLastName.toLocaleUpperCase())
      cy.get('tr')
        .eq(2)
        .contains('tr', UserList.aryaFirstName + ' II')
        .contains('tr', UserList.aryaLastName.toLocaleUpperCase())
    })
  })
})
