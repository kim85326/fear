import * as React from "react";
import Lottie from "react-lottie";
import * as rightWallJson from "../static/right_wall.json";

class RightWall extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: rightWallJson
    };

    return (
      <div className="right-wall">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default RightWall;
