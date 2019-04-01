const path = require('path');

module.exports = {
    configureWebpack: config => {
        config.context = path.resolve(__dirname, `src/projects/${process.env.PROJECT}`);
        config.entry = path.resolve(__dirname, `src/projects/${process.env.PROJECT}/main.js`);
    }
};