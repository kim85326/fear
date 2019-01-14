import * as React from "react";
import "../static/closeMenuButton.css";

interface ICloseMenuButtonProps {
  isOpen: boolean;
  isClosing: boolean;
  closeMenu: () => void;
}

interface ICloseMenuButtonState {
  isActive: boolean;
}

class CloseMenuButton extends React.Component<
  ICloseMenuButtonProps,
  ICloseMenuButtonState
> {
  public constructor(props: ICloseMenuButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <svg
        id="close-menu-button"
        className={`menu-button close-menu-button ${
          this.props.isOpen ? "show" : ""
        }  ${this.props.isClosing ? "isClosing" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 99.2 98.4"
      >
        <a onClick={this.handleClick}>
          <g id="圖層_1">
            <path
              className="st29"
              d="M90.7,57c5.9-2.7,9.4-9.2,8.3-15.9c-1.2-6.8-6.9-11.7-13.5-12.1c2.7-5.9,1.3-13.1-3.9-17.5
		C76.3,7.1,68.9,7,63.5,10.9C61.8,4.7,56.1,0,49.3,0C42.4,0,36.6,4.8,35,11.2C29.7,7.5,22.4,7.6,17.2,12c-5.3,4.4-6.7,11.8-3.7,17.7
		C7,30.3,1.4,35.1,0.2,41.8c-1.2,6.8,2.5,13.3,8.5,16C4.2,62.4,3,69.7,6.4,75.6c3.5,6,10.5,8.6,16.8,6.8c-0.6,6.5,3.2,12.8,9.6,15.1
		c6.5,2.4,13.6-0.1,17.2-5.6c3.7,5.3,10.7,7.7,17.1,5.4c6.5-2.4,10.3-8.8,9.6-15.4c6.3,1.7,13.1-1,16.5-6.8
		C96.7,69,95.5,61.6,90.7,57z"
            />
            <path
              className="st14"
              d="M46.9,28.3c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9c0-1.6,1.3-2.9,2.9-2.9
		C45.6,25.4,46.9,26.7,46.9,28.3z"
            />
            <circle className="st14" cx="55.2" cy="28.3" r="2.9" />
            <line className="st83" x1="36.8" y1="40.8" x2="62.5" y2="66.5" />
            <line className="st83" x1="62.5" y1="40.8" x2="36.8" y2="66.5" />
          </g>
        </a>
      </svg>
    );
  }

  private handleClick() {
    this.props.closeMenu();
  }
}

export default CloseMenuButton;
