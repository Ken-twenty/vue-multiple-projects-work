const { projects } = require('./common');
const inquirer = require('inquirer');
const { exec } = require('child_process');

inquirer.prompt([
    {
        type: 'list',
        name: 'project',
        message: 'Select a project to serve on development: ',
        choices: projects
    }
]).then(res => {
    console.log(res.project);
    process.env.PROJECT = res.project;
    const ServeProcess = exec('vue-cli-service serve');

    ServeProcess.stdout.on('data', data => {
        console.log(data);
    })
    ServeProcess.stderr.on('data', data => {
        console.log(data);
    });
    ServeProcess.on('error', err => {
        console.log(err);
    })
});

