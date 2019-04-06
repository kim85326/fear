import * as React from "react";
import Lottie from "react-lottie";
import * as mountainsJson from "../static/mountains.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: mountainsJson
};

class Mountains extends React.Component {
  public render() {
    return (
      <div className="mountains">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Mountains;
