const fs = require('fs');

const projects = fs.readdirSync('src/projects');
const pages = {};

projects.forEach(project => {
  pages[project] = `src/${project}/main.js`;
});

export default pages;
