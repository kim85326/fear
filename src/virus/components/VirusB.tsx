import * as React from "react";

interface IVirusBProps {
  handleClick: () => void;
}

class VirusB extends React.Component<IVirusBProps> {
  public constructor(props: IVirusBProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="virus virusB"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 159.745 167.476"
      >
        <a
          onClick={this.props.handleClick}
          className="virus-button virusB-button"
        >
          <path
            fill="#5B81B6"
            d="M4.935,36.733c-8.443,21.364,23.566,24.74,19.488,48.735c-4.875,28.682-33.479,40.336-21.527,56.896
	c9.33,12.928,27.203-2.023,58.197,3.68c17.975,3.309,24.719,28.051,41.9,19.73c13.264-6.422,3.098-25.041,14.643-44.98
	c8.131-14.041,36.441-2.373,41.729-25.169c4.285-18.487-28.605-18.977-40.668-37.124c-10.938-16.451,12.793-49.793-7.762-57.146
	C86.353-7.437,76.554,29.27,64.292,32.725C49.313,36.944,16.151,8.354,4.935,36.733z"
          />
        </a>
      </svg>
    );
  }
}

export default VirusB;
