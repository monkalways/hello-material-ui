import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Courses from './Courses';

const AppRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses" component={Courses} />
    </Switch>
  </main>
);

export default AppRoutes;
