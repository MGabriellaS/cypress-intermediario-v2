import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create issue', options, () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `project-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
    }

    beforeEach(() => {
      cy.login()
      cy.api_createProject(issue.project)
    })

    it('Verify that an issue can be created', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
          .should('contain', issue.title)
          .and('contain', issue.description)
    })
})