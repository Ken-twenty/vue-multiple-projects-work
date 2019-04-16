const inquirer = require('inquirer');
const chalk = require('chalk');
const {
  exec,
} = require('child_process');

const {
  Projects,
  EntryProject,
  ChildrenProjects,
} = require('./common');

const ServeInquirer = () => new Promise((resolve) => {

  inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Select a project to serve on development: ',
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
        const serveProcess = exec('vue-cli-service serve');
        resolve(serveProcess);

      });

    } else {

      process.env.PROJECT = listRes.project;
      const serveProcess = exec('vue-cli-service serve');
      resolve(serveProcess);

    }

  });

});

ServeInquirer().then((serveProcess) => {

  // 应用反馈
  serveProcess.stdout.on('data', (data) => {

    if (String(data).indexOf('error') !== -1) {

      console.log(chalk.red(data));

    } else {

      console.log(chalk.green(data));

    }

  });

  // 应用内错误处理
  serveProcess.stderr.on('data', (data) => {

    console.clear();
    console.log(data);

  });

  // 进程执行错误
  serveProcess.on('error', (err) => {

    console.log(`error: ${err}`);

  });

  // 进程关闭
  serveProcess.on('close', (close) => {

    console.log(`close: ${close}`);

  });

})
  .catch((errMsg) => {

    console.log(chalk.red(`自定义 serve 出错: ${errMsg || 'unknown'}`));

  });
