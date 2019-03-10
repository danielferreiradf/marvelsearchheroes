import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Search from "./components/layout/Search";
import Character from "./components/layout/Character";
import NotFound from "./components/layout/NotFound";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/character/:id" component={Character} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
