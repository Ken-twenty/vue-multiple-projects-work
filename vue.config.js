const path = require('path');

const {
  GeneratePages,
} = require('./config/common');
const CurrentProject = process.env.PROJECT || null;

module.exports = {
  outputDir: `dist/${CurrentProject}`,

  pages: GeneratePages(CurrentProject),

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
