import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    cy.login()
    cy.api_deleteProjects()
  })
  it('Verify that a project can be createVerify that a project can be created by API', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
  })
})

