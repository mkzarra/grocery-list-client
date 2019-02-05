import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import SignUp from './containers/Auth/SignUp';
import SignIn from './containers/Auth/SignIn'
import Logout from './containers/Auth/Logout';
import Items from './containers/Items/Items';
import MyLists from './containers/ListHistory/ListHistory';
import Main from './containers/Main/Main';
// import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';

class App extends Component {
  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-out" component={Logout} />
            <Route path="/items" component={Items} />
            <Route path="/lists" component={MyLists} />
            <Route path="/" component={Main} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default (App);
