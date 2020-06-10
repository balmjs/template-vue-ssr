// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/views/layouts/app';
import { createRouter } from '@/routes';
import { createStore } from '@/store';
import { sync } from 'vuex-router-sync';
import { isDev } from '@/config';

Vue.config.productionTip = false;
Vue.config.devtools = true;
/* eslint-disable */
export function createApp() {
  // 创建 router 实例
  const router = createRouter();
  const store = createStore();
  sync(store, router);

  let options = {
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: h => h(App)
  };

  if (isDev) {
    options.el = '#dev';
  }

  const app = new Vue(options);
  // 返回 app 和 router
  return { app, router, store };
}
