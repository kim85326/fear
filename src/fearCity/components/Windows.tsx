import * as React from "react";
import Lottie from "react-lottie";
import * as windowsJson from "../static/windows.json";

class Windows extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: windowsJson
    };

    return (
      <div className="windows">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Windows;
