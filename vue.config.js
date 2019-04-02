const path = require('path');

module.exports = {
  outputDir: `dist/${process.env.PROJECT}`,

  /* eslint no-param-reassign: 'off' */
  configureWebpack(config) {

    config.context = path.resolve(__dirname, `src/projects/${process.env.PROJECT}`);
    config.entry = path.resolve(__dirname, `src/projects/${process.env.PROJECT}/main.js`);

  },
};
