import { faker } from '@faker-js/faker'

describe('Create an Issue', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `project-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
    }
    beforeEach(() => {
        cy.api_deleteProjects()
    })
  it('Verify that an issue can be createVerify that a project can be created by API', () => {
    cy.api_createIssue(issue)
    .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.title).to.equal(issue.title)
        expect(response.body.description).to.equal(issue.description)
      })
  })
})