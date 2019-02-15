import * as React from "react";

interface IVirusGProps {
  handleClick: () => void;
}

class VirusG extends React.Component<IVirusGProps> {
  public constructor(props: IVirusGProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="virus virusG"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 420.529 346.188"
      >
        <a
          onClick={this.props.handleClick}
          className="virus-button virusG-button"
        >
          <path
            fill="#5B81B6"
            d="M420.529,35.324c-35.816,12.728-81.312,50.816-126.649,51.184
	c-61.742,0.5-92.972-119.228-152.621-77.786c-71.333,49.559-3.55,138.417-20.372,176.616
	c-20.353,46.216-154.252,84.051-113.064,160.85h412.707V35.324z"
          />
        </a>
      </svg>
    );
  }
}

export default VirusG;
