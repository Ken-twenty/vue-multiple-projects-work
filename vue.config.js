const path = require('path');

const {
  GeneratePages,
  GenerateContext,
} = require('./config/common');

const context = GenerateContext(process.env.PROJECT);

module.exports = {

  outputDir: `dist/${context}`,

  pages: GeneratePages(process.env.PROJECT),

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
      localeDir: `src/projects/${context}/locales`,
      enableInSFC: false,
    },

  },

};
