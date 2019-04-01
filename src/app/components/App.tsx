import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Contact from "../../contact/Contact";
import Home from "../../home/components/Home";
import ConnectedStoryA from "src/storyA/containers/StoryAContainer";
import ConnectedStoryB from "src/storyB/containers/StoryBContainer";
import ConnectedFearCity from "src/fearCity/containers/FearCityContainer";
import ConnectedStoryE from "src/storyE/containers/StoryEContainer";
import ConnectedEnding from "src/ending/containers/EndingContainer";
import SumbitFear from "src/submitFear/components/SubmitFear";
import ConnectedStoryC from "src/storyC/containers/StoryCContainer";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/fearCity" component={ConnectedFearCity} />
          <Route path="/storyA" component={ConnectedStoryA} />
          <Route path="/storyB" component={ConnectedStoryB} />
          <Route path="/storyC" component={ConnectedStoryC} />
          <Route path="/storyE" component={ConnectedStoryE} />
          <Route path="/ending" component={ConnectedEnding} />
          <Route path="/submitFear" component={SumbitFear} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
