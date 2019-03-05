import * as React from "react";
import endingContentSrc from "../static/ending_1.png";

class EndingContent extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="ending-content">
        <img src={endingContentSrc} alt="" />
      </div>
    );
  }
}

export default EndingContent;
