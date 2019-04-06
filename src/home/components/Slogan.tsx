import * as React from "react";
import Lottie from "react-lottie";
import * as sloganJson from "../static/slogan.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: sloganJson
};

class Slogan extends React.Component {
  public render() {
    return (
      <div className="slogan">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Slogan;
