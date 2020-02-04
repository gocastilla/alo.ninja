exports.config = {
  projectRoot: './src',
  projectName: 'ssrtest',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/projects/:projectId': {
      type: 'json',
      projectId: {
        url: '/assets/projects.json',
        property: 'projectId'
      }
    }
  }
};
