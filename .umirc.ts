import { defineConfig } from 'umi';

export default defineConfig({
  alias: {
    '@wrappers': '/src/wrappers',
    '@components': 'src/components',
    '@layouts': 'src/layouts',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/',
  locale: {
    default: 'ja-JP',
    antd: true,
    title: true,
  },
  fastRefresh: {},
  hash: true,
  dynamicImport: {},
  favicon: '/assets/favicon.ico',
  history: { type: 'hash' },
  ignoreMomentLocale: true,
  request: {
    dataField: '',
  },
});
