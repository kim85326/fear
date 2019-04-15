import * as React from "react";

class Arrow extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 99.3 124.7"
      >
        <linearGradient
          id="ARROW"
          gradientUnits="userSpaceOnUse"
          x1="-1988.96"
          y1="157.2923"
          x2="-1988.96"
          y2="281.9872"
          gradientTransform="matrix(1 0 0 -1 2038.61 281.9898)"
        >
          <stop offset="0.2" stopColor="#5D87C0" />
          <stop offset="0.29" stopColor="#5D87C0" stopOpacity="0.96" />
          <stop offset="0.42" stopColor="#5D87C0" stopOpacity="0.84" />
          <stop offset="0.58" stopColor="#5D87C0" stopOpacity="0.65" />
          <stop offset="0.77" stopColor="#5D87C0" stopOpacity="0.38" />
          <stop offset="0.98" stopColor="#5D87C0" stopOpacity="4.000000e-02" />
          <stop offset="1" stopColor="#5D87C0" stopOpacity="0" />
        </linearGradient>
        <path
          fill="url(#ARROW)"
          d="M65,55.9V5.2C65,2.4,62.7,0,59.8,0H38.9c-2.9,0-5.2,2.3-5.2,5.2c0,0,0,0,0,0v50.7c0,0.6-0.5,1.1-1.1,1.1H5.2
	c-2.9,0-5.2,2.4-5.2,5.2c0,1.2,0.4,2.3,1.1,3.2l44.4,57.2c1.8,2.3,5,2.7,7.3,0.9c0.3-0.3,0.6-0.6,0.9-0.9l44.4-57.2
	c1.8-2.3,1.4-5.5-0.9-7.3c-0.9-0.7-2-1.1-3.2-1.1H66.2C65.5,57.1,65,56.6,65,55.9C65,55.9,65,55.9,65,55.9z"
        />
      </svg>
    );
  }
}

export default Arrow;
