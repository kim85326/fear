import * as React from "react";

class Cushion extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="cushion"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 182.5 43.8"
      >
        <g>
          <path
            fill="#8A8077"
            d="M182.2,22.2c1.8,21.7-36,17.9-92.8,20.7C16.9,46.5-1,40.4,0,27.4C1.7,6.1,61.5,0.8,86.2,0.2
            C110.8-0.5,180.3-0.5,182.2,22.2z"
          />
        </g>
      </svg>
    );
  }
}

export default Cushion;
