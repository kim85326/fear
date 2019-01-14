import * as React from "react";
import arrowSrc from "../static/arrow.png";

class Arrow extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return <img className="arrow" src={arrowSrc} alt="" />;
  }
}

export default Arrow;
