const fs = require('fs');

const Projects = fs.readdirSync('src/projects');

const SinglePage = (project) => {

  return {
    [project]: {
      entry: path.resolve(__dirname, `../src/projects/${project}/main.js`),
      template: path.resolve(__dirname, `../src/projects/${project}/index.html`),
      filename: 'index.html',
    },
  }

}

const MultiPages = (projects) => {

  let pages = {};

  projects.split('///').forEach((project) => {
    pages[project] = {
      entry: path.resolve(__dirname, `../src/projects/${project}/main.js`),
      template: path.resolve(__dirname, `../src/projects/${project}/index.html`),
      filename: 'index.html',
    }
  });

  return pages

};

module.exports = {
  Projects,
  SinglePage,
  MultiPages,
};
