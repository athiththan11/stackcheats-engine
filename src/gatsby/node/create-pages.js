const path = require(`path`)

const QUERY = `
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
              title
              category
              weight
              updated
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const createPages = ({ graphql, actions }) => {
  const StackCheatTemplate = path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    `src/templates/stackcheat-template.js`
  )

  return graphql(QUERY).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // build pages
      buildPage({ node, actions, StackCheatTemplate })
    })
  })
}

function buildPage({ node, actions, StackCheatTemplate }) {
  const { createPage, createRedirect } = actions
  const path = node.fields.slug

  const context = {
    slug: path,
    node_id: node.id,
    nodePath: path,
    nodeType: 'sheet',
    title: node.frontmatter.title,
    category: node.frontmatter.category || '',
    weight: node.frontmatter.weight || 0,
    updated: node.frontmatter.updated
  }

  createPage({
    path,
    component: StackCheatTemplate,
    context
  })

  const aliases = node.frontmatter.aliases || []
  aliases.forEach(alias => {
    const paths = {
      fromPath: `/${alias}`,
      toPath: path
    }

    createRedirect({
      ...paths,
      isPermanent: true,
      redirectInBrowser: true
    })
  })
}

module.exports = createPages
