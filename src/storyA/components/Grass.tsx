import * as React from "react";
import "../static/grass.css";

class Grass extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="grass"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 217.8"
      >
        <path
          className="st4"
          d="M0,28.8l273.2,0c0,0-12.9-21.4-7.1-21.9c5.8-0.5,20.4,21.9,20.4,21.9s-12.4-20.6-6.9-21.9
	c5.6-1.3,22.2,20.6,22.2,20.6s-9.8-15.1-5.3-17.4c4.5-2.4,18.2,15.7,18.2,15.7s-11.4-16.3-5.8-18.9c5.6-2.6,23.5,24.1,23.5,24.1
	S312.5,3.7,319.4,0.3c6.9-3.4,20.3,29.6,41.2,33.8l1559.9,0.1l0,43.4L0,77.5L0,28.8z"
        />
        <linearGradient
          id="SVGID_1_GRASS"
          gradientUnits="userSpaceOnUse"
          x1="689.1785"
          y1="614.7012"
          x2="1231.2924"
          y2="-324.2675"
        >
          <stop offset="0.4741" style={{ stopColor: "#F7CB2F" }} />
          <stop offset="1" style={{ stopColor: "#A5C654" }} />
        </linearGradient>
        <rect x="0" y="73.6" className="st16" width="1920.5" height="143.3" />
      </svg>
    );
  }
}

export default Grass;
