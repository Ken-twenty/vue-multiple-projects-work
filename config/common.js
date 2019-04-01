const fs = require('fs');

const projects = fs.readdirSync('src/projects');

module.exports = {
  projects
};

