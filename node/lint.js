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
    message: 'Select a project to lint: ',
    choices: projects,
  },
]).then((res) => {

  process.env.PROJECT = res.project;
  const LintProcess = exec(`vue-cli-service lint --quiet '/src/${res.project}/'`);

  // 应用反馈
  LintProcess.stdout.on('data', (data) => {

    if (String(data).indexOf('error') !== -1 && String(data).indexOf('No lint errors') === -1) {

      console.log(chalk.red(data));

    } else {

      console.log(chalk.green(data));

    }

  });

  // 应用内错误处理
  LintProcess.stderr.on('data', (data) => {

    console.clear();
    console.log(data);

  });

  // 命令执行错误
  LintProcess.on('error', (err) => {

    console.log(err);

  });

});
