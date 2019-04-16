import * as React from "react";
import "../static/loading.css";

class Loading extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return <div className="loading-wrapper" />;
  }
}

export default Loading;
