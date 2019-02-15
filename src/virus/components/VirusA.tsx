import * as React from "react";

interface IVirusAProps {
  handleClick: () => void;
}

class VirusA extends React.Component<IVirusAProps> {
  public constructor(props: IVirusAProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="virus virusA"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 538.852 611.408"
      >
        <a
          onClick={this.props.handleClick}
          className="virus-button virusA-button"
        >
          <path
            fill="#5B81B6"
            d="M269.41,0c54.14-0.028,29.547,105.556,94.701,124.859c76.188,22.572,133.554-43.896,155.195,0.371
	c25.137,51.417-73.777,87.549-68.236,155.321c4.579,56.004,98.73,60.109,86.725,115.634c-16.307,75.413-96.818,9.636-139.952,54.604
	s28.024,135.716-28.802,157.805c-63.155,24.549-55.328-119.395-120.252-126.28c-43.17-4.578-81.12,99.259-122.295,83.818
	c-60.005-22.502,23.514-134.281,2.283-166.449c-24.35-36.894-120.185,8.487-128.331-47.949
	c-7.42-51.404,79.862-42.274,112.671-103.303c32.809-61.029-95.602-86.537-62.446-136.573
	c32.855-49.584,101.875,31.301,127.291,11.405C227.846,84.212,228.126,0.021,269.41,0z"
          />
        </a>
      </svg>
    );
  }
}

export default VirusA;
