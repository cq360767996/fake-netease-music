import { Suspense, useEffect } from 'react';
import type { RouteConfig } from '@/router';
import { Switch, Route, useLocation } from 'react-router-dom';
import './layout.less';
import Sidebar from './sidebar';
import Footer from './footer';
import NotFound from './not-found';
import Scrollbar from '@/components/scrollbar';
import { Spin } from 'antd';
import { clearRequests } from '@/api/api';
import store, { setPause, setShowDetail } from '@/store';
import { useDispatch } from 'react-redux';
import json from 'json5';
import { classGenerator } from '@/utils';
import { FC } from 'react';

type Props = { routes?: Array<RouteConfig> };

export const getClass = classGenerator('main');

const Layout: FC<Props> = ({ routes }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  function interceptor() {
    const state = store.getState();
    const { cacheCurrent, current: rawCurrent } = state.currentTrack;
    let current = rawCurrent;
    // 缓存过值，就需要读取
    if (cacheCurrent !== undefined) current = cacheCurrent;
    localStorage.setItem('djDetail', json.stringify({ ...state.djDetail }));
    localStorage.setItem(
      'currentTrack',
      json.stringify({ ...state.currentTrack, current, autoPlay: false, fm: [] })
    );
    localStorage.setItem('controller', json.stringify({ ...state.controller, pause: true }));
  }

  function preventKeyDefault(e: KeyboardEvent, cb?: () => void) {
    if (e.code === 'Space') {
      const focusDom = document.activeElement;
      // 当前不存在聚焦元素或聚焦元素为body
      if (!focusDom || focusDom === document.body) {
        e.stopPropagation();
        e.preventDefault();
        cb?.();
      }
    }
  }

  function handleKeyup(e: KeyboardEvent) {
    preventKeyDefault(e, () => {
      const state = store.getState();
      dispatch(setPause(!state.controller.pause));
    });
  }

  useEffect(() => {
    dispatch(setShowDetail(false));
    clearRequests();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('beforeunload', interceptor);
    document.addEventListener('keyup', handleKeyup);
    document.addEventListener('keydown', preventKeyDefault);

    return () => {
      window.removeEventListener('beforeunload', interceptor);
      document.removeEventListener('keyup', handleKeyup);
      document.removeEventListener('keydown', preventKeyDefault);
    };
  }, []);

  return (
    <>
      <section className="container">
        <Sidebar />
        <Scrollbar className={getClass()}>
          <Suspense
            fallback={<Spin className={getClass('loading')} style={{ position: 'absolute' }} />}
          >
            <Switch>
              {routes &&
                routes.map(route => {
                  const { component: Component, ...rest } = route;

                  return (
                    <Route
                      key={route.path}
                      {...rest}
                      render={props => <Component key={props.match.url} />}
                    />
                  );
                })}
              <NotFound />
            </Switch>
          </Suspense>
        </Scrollbar>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
