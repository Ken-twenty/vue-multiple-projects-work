const fs = require('fs');
const path = require('path');

const Projects = fs.readdirSync('src/projects');
const EntryProject = 'euht_uds';

const GeneratePages = (projectStr) => {

  if (!projectStr) {

    return {};

  }
  if (projectStr.indexOf('///') === -1) {

    return {
      [projectStr]: {
        entry: path.resolve(__dirname, `../src/projects/${projectStr}/main.js`),
        template: path.resolve(__dirname, `../src/projects/${projectStr}/index.html`),
        filename: 'index.html',
      },
    };

  }

  const pages = {};

  projectStr.split('///').forEach((project) => {

    pages[project] = {
      entry: path.resolve(__dirname, `../src/projects/${project}/main.js`),
      template: path.resolve(__dirname, `../src/projects/${project}/index.html`),
      filename: `${project === EntryProject ? 'index' : project}.html`,
    };

  });

  return pages;


};

module.exports = {
  Projects,
  EntryProject,
  GeneratePages,
};
