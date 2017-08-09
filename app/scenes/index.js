/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../components/App';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';

export default () => (
  <App>
    <Switch>
      <Route path="/projects/:id/:configure" component={ProjectDetail} />
      <Route path="/projects/:id" component={ProjectDetail} />
      <Route path="/projects" component={Projects} />
      <Route path="/" exact component={Projects} />
    </Switch>
  </App>
);
