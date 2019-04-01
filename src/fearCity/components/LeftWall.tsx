import * as React from "react";
import Lottie from "react-lottie";
import * as leftWallJson from "../static/left_wall.json";

class LeftWall extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: leftWallJson
    };

    return (
      <div className="left-wall">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default LeftWall;
