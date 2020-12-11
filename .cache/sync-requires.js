const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Soren/code/Gatsby/airtable-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/Soren/code/Gatsby/airtable-blog/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/Soren/code/Gatsby/airtable-blog/src/pages/index.jsx"))),
  "component---src-templates-blog-post-template-jsx": hot(preferDefault(require("/Users/Soren/code/Gatsby/airtable-blog/src/templates/blog-post-template.jsx")))
}

