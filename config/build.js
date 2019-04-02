const { projects } = require('./common');
const inquirer = require('inquirer');
const { exec } = require('child_process');
const chalk = require('chalk');

inquirer.prompt([
  {
    type: 'list',
        name: 'project',
        message: 'Select a project to build: ',
        choices: projects
  }
]).then(res => {
  process.env.PROJECT = res.project;
  const BuildProcess = exec('vue-cli-service build');

  BuildProcess.stdout.on('data', data => {
    console.log(chalk.green(data));
  });
  BuildProcess.stderr.on('data', data => {
    console.clear();
    console.log(data);
  });
  BuildProcess.on('error', err => {
    console.log(err);
  });
});