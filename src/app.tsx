import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '@/router';

const App: React.FC = () => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path}>
          <route.component {...route} />
        </Route>
      ))}
    </Switch>
  </Router>
);

export default App;
