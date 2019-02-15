import * as React from "react";

interface IVirusFProps {
  handleClick: () => void;
}

class VirusF extends React.Component<IVirusFProps> {
  public constructor(props: IVirusFProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="virus virusF"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 357 334.635"
      >
        <a
          onClick={this.props.handleClick}
          className="virus-button virusF-button"
        >
          <path
            fill="#5B81B6"
            d="M100.188,58.124c-5.038,31.577-121.517,38.321-96.629,90c17.077,35.462,100.342,3.358,124.887,34.162
	c36.914,46.327-50.333,120.265,3.446,148.171c48.389,25.11,55.513-71.341,108.371-67.768c52.006,3.516,65.471,89.614,116.736,63.134
	V0H62.934C80.904,20,103.221,39.116,100.188,58.124z"
          />
        </a>
      </svg>
    );
  }
}

export default VirusF;
