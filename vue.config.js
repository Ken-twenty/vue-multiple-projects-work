const path = require('path');
const CurrentProject = process.env.PROJECT;
const {
  SinglePage,
  MultiPages,
} = require('./config/common');

let pagesObj;
if (CurrentProject.indexOf('///') !== -1) {
  pagesObj = SinglePage(CurrentProject);
} else {
  pagesObj = MultiPages(CurrentProject);
}

module.exports = {
  outputDir: `dist/${CurrentProject}`,

  pages: pagesObj,

  /* eslint no-param-reassign: 'off' */
  configureWebpack(config) {

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
