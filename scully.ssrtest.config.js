exports.config = {
  projectRoot: './src',
  projectName: 'ssrtest',
  outDir: './dist/static',
  routes: {
    '/projects/:projectId': {
      type: 'json',
      projectId: {
        url: '/assets/projects.json',
        property: 'projectId'
      }
    }
  }
};
