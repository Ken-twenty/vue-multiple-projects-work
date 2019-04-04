const {
  projects,
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
    message: 'Select a project to serve on development: ',
    choices: projects,
  },
]).then((res) => {

  process.env.PROJECT = res.project;
  const ServeProcess = exec('vue-cli-service serve');

  // 应用反馈
  ServeProcess.stdout.on('data', (data) => {

    if (String(data).indexOf('error') !== -1) {

      console.log(chalk.red(data));

    } else {

      console.log(chalk.green(data));

    }

  });

  // 应用内错误处理
  ServeProcess.stderr.on('data', (data) => {

    console.clear();
    console.log(data);

  });

  // 命令执行错误
  ServeProcess.on('error', (err) => {

    console.log(err);

  });

});
