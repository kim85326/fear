import * as React from "react";
import Lottie from "react-lottie";
import * as sloganJson from "../static/slogan.json";

class Slogan extends React.Component {
  public render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: sloganJson
    };

    return (
      <div className="slogan">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Slogan;
