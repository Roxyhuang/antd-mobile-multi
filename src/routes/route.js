/* eslint-disable */
import React from 'react';
import {
  Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import createHashHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux';
import { asyncComponent } from '../utils/asyncComponent';
import Layout from '../components/containers/layout/Layout';

const history = createHashHistory();

// import { syncHistoryWithStore } from 'react-router-redux';
// import { useScroll } from 'react-router-scroll';
// import store from '../store/store';
// const history = syncHistoryWithStore(browserHistory, store);

const ListA = asyncComponent(() => import('../components/containers/list/ListA'));
const ListB = asyncComponent(() => import('../components/containers/list/ListB'));
const ListC = asyncComponent(() => import('../components/containers/list/ListC'));
const noMatch = asyncComponent(() => import('../components/containers/no-match/noMatch'));

function mapStyles(styles) {
  return {
    transform: `translate(${styles.scale}%)`,
    position: 'absolute',
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 180,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  atEnter: {
    scale: 300,
  },
  atLeave: {
  },
  atActive: {
    scale: bounce(0),
  },
};

const routes = (
  <ConnectedRouter history={history} key={Math.random()}>
    <Router history={history} key={Math.random()}>
      <Layout history={history}>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >
          <Redirect exact from={'/' || '/index.html'} to="/list-a" />
          <Route path="/list-a" component={ListA} />
          <Route path="/list-b" component={ListB} />
          <Route path="/list-c" component={ListC} />
          <Redirect exact from="/index.html" to="/list-a" />
          <Route component={noMatch} />
        </AnimatedSwitch>
      </Layout>
    </Router>
  </ConnectedRouter>
);

export default routes;
