import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Contact from "../../contact/Contact";
import Home from "../../home/components/Home";
import ConnectedFearCity from "src/fearCity/containers/FearCityContainer";
import ConnectedStoryB from "src/storyB/containers/StoryBContainer";
import ConnectedStoryE from "src/storyE/containers/StoryEContainer";
import ConnectedEnding from "src/ending/containers/EndingContainer";
import SumbitFear from "src/submitFear/components/SubmitFear";
import ConnectedStoryC from "src/storyC/containers/StoryCContainer";
import ConnectedStorys from 'src/storys/containers/StorysContainer';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/fearCity" component={ConnectedFearCity} />
          <Route path="/storys" component={ConnectedStorys} />
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
