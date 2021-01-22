import React, { Component } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Landing from "./pages/Landing";
import Activation from "./pages/Activation";
import Home from "./pages/Home";

// redux ofline or redux persist
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route
                exact
                strict
                path='/user/activate/:token'
                component={Activation}
              />

              <Route exact strict path='/home' component={Home} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}
