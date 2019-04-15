import * as React from "react";
import "../static/openMenuButton.css";

interface IOpenMenuButtonProps {
  isOpening: boolean;
  isOpen: boolean;
  openMenu: () => void;
}

class OpenMenuButton extends React.Component<IOpenMenuButtonProps> {
  public constructor(props: IOpenMenuButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <a onClick={this.handleClick}>
        <svg
          id="open-menu-button"
          className={`menu-button open-menu-button
        ${this.props.isOpening ? "isOpening" : ""}
        ${!this.props.isOpen ? "show" : ""}
        `}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 99.2 98.4"
        >
          <path
            fill="#FCF8ED"
            d="M91.5,34.1c-1.2-0.9-1.8-2.4-1.6-4C91.1,19.7,83.6,10.1,73,8.9c-1.5-0.2-3-0.2-4.4,0c-1.5,0.2-3-0.4-4-1.6
	c-6.6-8.3-18.7-9.7-27-3.1c-1.2,0.9-2.2,2-3.1,3.1c-0.9,1.2-2.4,1.8-4,1.6C20,7.7,10.5,15.2,9.2,25.8c-0.2,1.5-0.2,3,0,4.4
	c0.2,1.5-0.4,3-1.6,4c-8.3,6.6-9.7,18.7-3.1,27c0.9,1.2,2,2.2,3.1,3.1c1.2,0.9,1.8,2.4,1.6,4C8,78.7,15.6,88.3,26.1,89.5
	c1.5,0.2,3,0.2,4.4,0c1.5-0.2,3,0.4,4,1.6c6.6,8.3,18.7,9.7,27,3.1c1.2-0.9,2.2-2,3.1-3.1c1-1.2,2.5-1.8,4-1.6
	c10.5,1.2,20.1-6.3,21.3-16.9c0.2-1.5,0.2-3,0-4.4c-0.2-1.5,0.4-3,1.6-4c4.6-3.6,7.3-9.2,7.3-15.1C98.8,43.3,96.1,37.8,91.5,34.1z
	 M55.2,31.5c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9s-2.9-1.3-2.9-2.9S53.6,31.5,55.2,31.5z M41.1,34.4c0-1.6,1.3-2.9,2.9-2.9
	c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9C42.4,37.3,41.1,36,41.1,34.4C41.1,34.4,41.1,34.4,41.1,34.4z M63,68.4H36.5
	c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H63c1.2,0,2.2,1,2.2,2.2S64.2,68.4,63,68.4z M63,59.9H36.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2
	H63c1.2,0,2.2,1,2.2,2.2S64.2,59.9,63,59.9z M63,51.5H36.5c-1.2,0-2.2-1-2.2-2.3s1-2.2,2.2-2.2H63c1.2,0,2.2,1,2.2,2.2
	S64.2,51.5,63,51.5z"
          />
        </svg>
      </a>
    );
  }

  private handleClick() {
    this.props.openMenu();
  }
}

export default OpenMenuButton;
