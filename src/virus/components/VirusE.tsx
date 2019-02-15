import * as React from "react";

interface IVirusEProps {
  handleClick: () => void;
}

class VirusE extends React.Component<IVirusEProps> {
  public constructor(props: IVirusEProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="virus virusE"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 417.237 390.911"
      >
        <a
          onClick={this.props.handleClick}
          className="virus-button virusE-button"
        >
          <path
            fill="#5B81B6"
            d="M168.691,6.531c-48.412,24.926,3.412,80.914-41.318,117.345
	C73.907,167.421,4.695,143.561,0.162,191.752c-3.538,37.622,51.68,38.856,98.055,97.412c26.895,33.959,0.303,88.617,43.936,100.598
	c33.682,9.247,44.615-39.828,96.33-57.37c36.42-12.353,68.701,52.653,113.715,20.244c36.504-26.282-21.395-78.499-14.584-129.695
	c6.176-46.416,100.545-68.842,75.361-114.043c-30.117-54.055-104.893-3.881-132.158-16.861
	C247.516,76.184,232.996-26.58,168.691,6.531z"
          />
        </a>
      </svg>
    );
  }
}

export default VirusE;
