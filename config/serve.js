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
    message: 'Select a project to serve on development: ',
    choices: Projects,
  },
]).then((res) => {

  let ServeProcess;
  if (res.project === 'euht_uds') {

    inquirer.prompt([
      {
        type: 'checkbox',
        name: 'projects',
        message: 'euht_uds is the entry page, select several children projects which you wanner wrap: ',
        choices: Projects.slice(0, -1),
      }
    ]).then((res) => {

      // Windows 与 Linux 文件夹均不能包含 '/'，所以可以安全地作为分隔符使用
      process.env.PROJECT = res.project.join('///');
      ServeProcess = exec('vue-cli-service serve');

    });

  } else {

    process.env.PROJECT = res.project;
    ServeProcess = exec('vue-cli-service serve');

  }

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
