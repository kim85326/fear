import * as React from "react";
import Lottie from "react-lottie";
import * as hairBallAJson from "../static/hairBallA.json";

class HairBallA extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: hairBallAJson
    };

    return (
      <div className="hairBallA">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default HairBallA;
