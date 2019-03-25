import * as React from "react";

interface ICloseAdventureStoryBProps {
  isHiding: boolean;
  handleClick: () => void;
}

class CloseAdventureStoryButton extends React.Component<ICloseAdventureStoryBProps> {
  public constructor(props: ICloseAdventureStoryBProps) {
    super(props);
  }

  public render() {
    return (
      <a
        onClick={this.props.handleClick}
        className={`close-adventureStory-button ${
          this.props.isHiding ? "isHiding" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 66.4 66.4"
        >
          <g>
            <line
              fill="none"
              stroke="#E77452"
              strokeWidth="4"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="2.108"
              y1="2.108"
              x2="64.292"
              y2="64.292"
            />
            <line
              fill="none"
              stroke="#E77452"
              strokeWidth="4"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="64.292"
              y1="2.108"
              x2="2.108"
              y2="64.292"
            />
          </g>
        </svg>
      </a>
    );
  }
}

export default CloseAdventureStoryButton;
