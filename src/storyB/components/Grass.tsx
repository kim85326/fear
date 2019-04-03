import * as React from "react";
import Lottie from "react-lottie";
import * as grassJson from "../static/grass.json";

class Grass extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: grassJson
    };

    return (
      <div className="grass">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Grass;
