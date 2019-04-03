const path = require('path');
const CurrentProject = process.env.PROJECT;

module.exports = {
  outputDir: `dist/${CurrentProject}`,

  /* eslint no-param-reassign: 'off' */
  configureWebpack(config) {

    config.context = path.resolve(__dirname, `src/projects/${CurrentProject}`);
    config.entry = path.resolve(__dirname, `src/projects/${CurrentProject}/main.js`);
    config.resolve.alias = {
      '@images': path.resolve(__dirname, 'src/common/assets/images'),
      '@scripts': path.resolve(__dirname, 'src/common/assets/scripts'),
      '@styles': path.resolve(__dirname, 'src/common/assets/styles'),
    };

  },
  pluginOptions: {

    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'en_US',
      localeDir: `src/projects/${CurrentProject}/locales`,
      enableInSFC: false,
    },

  },
};
