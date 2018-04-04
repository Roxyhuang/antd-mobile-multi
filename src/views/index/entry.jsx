import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/global.less';
import { Provider } from 'react-redux';
import zhCN from 'antd-mobile/lib/locale-provider/';
import { LocaleProvider } from 'antd-mobile';
import createStore from '../../core/createStore';
import routers from '../../routes/route';

if (process.env.NODE_ENV === 'development' && process.env.DEBUG) {
  const eruda = require('eruda');
  // open debug mode
  eruda.init();
}

const store = createStore();

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      { routers }
    </LocaleProvider>
  </Provider>, MOUNT_NODE,
);
