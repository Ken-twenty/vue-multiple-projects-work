const {
  Projects,
} = require('./common');
const inquirer = require('inquirer');
const {
  exec,
} = require('child_process');
const chalk = require('chalk');

inquirer.prompt([
  {
    type: 'list',
    name: 'project',
    message: 'Select a project to build: ',
    choices: Projects,
  },
]).then((res) => {

  process.env.PROJECT = res.project;
  const BuildProcess = exec('vue-cli-service build');

  // 应用反馈
  BuildProcess.stdout.on('data', (data) => {

    console.log(chalk.green(data));

  });

  // 应用内错误处理
  BuildProcess.stderr.on('data', (data) => {

    console.clear();
    console.log(data);

  });

  // 命令执行错误
  BuildProcess.on('error', (err) => {

    console.log(err);

  });

});
