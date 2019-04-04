import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { locale } from 'iview';
import InnerZhCN from 'iview/dist/locale/zh-CN';
import InnerEnUS from 'iview/dist/locale/en-US';
import CustomZhCN from './zh-CN';
import CustomEnUS from './en-US';

Vue.use(VueI18n);
locale(InnerZhCN);

/* eslint camelcase: 'off' */
const messages = {
  zh_CN: {
    ...InnerZhCN,
    ...CustomZhCN,
  },
  en_US: {
    ...InnerEnUS,
    ...CustomEnUS,
  },
};

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'zh_CN',
  messages,
});
