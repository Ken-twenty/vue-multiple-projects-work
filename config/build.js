const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const {
  spawn,
} = require('child_process');

const {
  Projects,
  EntryProject,
  ChildrenProjects,
} = require('./common');

const BuildInquirer = () => new Promise((resolve) => {

  inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Select a project to build for production: ',
      choices: Projects,
    },
  ]).then((listRes) => {

    if (listRes.project === EntryProject) {

      inquirer.prompt([
        {
          type: 'checkbox',
          name: 'projects',
          message: 'euht_uds is the entry page, select several children projects which you wanner wrap: ',
          choices: ChildrenProjects,
        },
      ]).then((checkboxRes) => {

        // Windows 与 Linux 文件夹均不能包含 '/'，所以可以安全地作为分隔符使用
        process.env.PROJECT = [
          EntryProject,
          ...checkboxRes.projects,
        ].join('///');
        const buildProcess = spawn('vue-cli-service.cmd', ['build'], { cwd: path.resolve(__dirname, '..') });
        resolve(buildProcess);

      });

    } else {

      process.env.PROJECT = listRes.project;
      const buildProcess = spawn('vue-cli-service.cmd', ['build'], { cwd: path.resolve(__dirname, '..') });
      resolve(buildProcess);

    }

  });

});

BuildInquirer().then((buildProcess) => {

  // 应用反馈
  buildProcess.stdout.on('data', (data) => {

    if (String(data).indexOf('error') !== -1) {

      console.log(chalk.red(data));

    } else {

      console.log(chalk.green(data));

    }

  });

  // 应用内错误处理
  buildProcess.stderr.on('data', (data) => {

    console.clear();
    console.log(data);

  });

  // 进程执行错误
  buildProcess.on('error', (err) => {

    console.log(`error: ${err}`);

  });

  // 进程关闭
  buildProcess.on('close', (close) => {

    console.log(`close: ${close}`);

  });

});
