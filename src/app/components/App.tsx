import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Contact from "../../contact/Contact";
import Home from "../../home/components/Home";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
