import * as React from "react";
import Lottie from "react-lottie";
import * as soilJson from "../static/soil.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: soilJson
};

class Soil extends React.Component {
  public render() {
    return (
      <div className="soil">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Soil;
