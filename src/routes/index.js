import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import New from '../pages/New';
import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/details/:id" component={Details} isPrivate />
      <Route path="/meetup/edit/:id" component={Edit} isPrivate />
      <Route path="/meetup/new" component={New} isPrivate />
    </Switch>
  );
}
