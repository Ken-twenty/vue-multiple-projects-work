const fs = require('fs');
const path = require('path');

const Projects = fs.readdirSync('src/projects');
const EntryProject = 'euht_uds';

const GetChildrenProjects = (projects) => {

  const tempProjects = [...projects];
  tempProjects.splice(tempProjects.findIndex((item) => item === EntryProject), 1);

  return tempProjects;

};

const GeneratePages = (projectStr = 'temp') => {

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

const GenerateContext = (projectStr = 'temp') => (projectStr.indexOf('///') === -1 ? projectStr : EntryProject);

module.exports = {
  Projects,
  EntryProject,
  ChildrenProjects: GetChildrenProjects(Projects),
  GeneratePages,
  GenerateContext,
};
