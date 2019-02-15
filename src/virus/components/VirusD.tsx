import * as React from "react";

interface IVirusDProps {
  handleClick: () => void;
}

class VirusD extends React.Component<IVirusDProps> {
  public constructor(props: IVirusDProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="virus virusD"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 164.974 164.037"
      >
        <a
          onClick={this.props.handleClick}
          className="virus-button virusD-button"
        >
          <path
            fill="#5B81B6"
            d="M131.263,51.494c-8.934-13.544,14.147-33.666-3.89-48.574C112.745-9.17,97.622,20.04,75.998,22.731
	c-19.603,2.44-38.84-33.679-54.597-18.571c-18.843,18.068,9.625,43.225,7.24,55.74C25.729,75.185-14.66,92.092,5.727,114.799
	c15.345,17.095,32.657-10.04,52.308,4.323c23.485,17.17,21.142,47.966,41.296,44.667c15.731-2.576,10.335-25.244,29.278-50.429
	c10.986-14.605,36.136-9.594,36.362-28.681C165.146,69.945,143.947,70.727,131.263,51.494z"
          />
        </a>
      </svg>
    );
  }
}

export default VirusD;
