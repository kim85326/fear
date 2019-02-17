import * as React from "react";

interface ICloseInfoDialogAProps {
  isHiding: boolean;
  handleClick: () => void;
}

class CloseInfoDialogAButton extends React.Component<ICloseInfoDialogAProps> {
  public constructor(props: ICloseInfoDialogAProps) {
    super(props);
  }

  public render() {
    return (
      <a
        onClick={this.props.handleClick}
        className={`close-info-dialog-button ${
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
              stroke="#FCF8ED"
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
              stroke="#FCF8ED"
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

export default CloseInfoDialogAButton;
