import * as React from "react";

interface IVirusCProps {
  handleClick: () => void;
}

class VirusC extends React.Component<IVirusCProps> {
  public constructor(props: IVirusCProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="virus virusC"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 350.476 367.657"
      >
        <a
          onClick={this.props.handleClick}
          className="virus-button virusC-button"
        >
          <path
            fill="#5B81B6"
            d="M259.234,113.722c-25.718-29.37,21.514-76.293-26.078-107.881
	c-38.593-25.615-63.817,40.837-113.698,48.789C80.735,60.803,33,3.97,0,9.529v91.478c11,15.871,21.721,30.109,21.252,40.726
	C20.76,152.894,11,164.796,0,177.453v97.435c35,15.461,65.264-30.77,110.845-3.854c61.184,36.13,66.349,104.964,112.562,95.789
	c36.08-7.162,15.456-57.184,51.196-115.012c20.727-33.537,81.564-24.643,75.442-67.195
	C345.319,151.77,295.754,155.428,259.234,113.722z"
          />
        </a>
      </svg>
    );
  }
}

export default VirusC;
