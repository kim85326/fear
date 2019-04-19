import * as React from "react";
import { CSSTransition } from "react-transition-group";

interface ICloseMenuButtonProps {
  isOpen: boolean;
  closeMenu: () => void;
}

class CloseMenuButton extends React.Component<ICloseMenuButtonProps> {
  public constructor(props: ICloseMenuButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isOpen}
        timeout={{ enter: 500, exit: 300 }}
        classNames="show"
      >
        <a onClick={this.handleClick} className="menu-button close-menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 99.2 98.4"
          >
            <path
              fill="#FCF8ED"
              d="M91.5,34.1c-1.2-0.9-1.8-2.4-1.6-4c1.2-10.4-6.3-20-16.9-21.2c-1.5-0.2-3-0.2-4.4,0c-1.5,0.2-3-0.4-4-1.6
	C58-1,45.9-2.4,37.6,4.2c-1.2,0.9-2.2,2-3.1,3.1c-0.9,1.2-2.4,1.8-4,1.6C20,7.7,10.5,15.2,9.2,25.8c-0.2,1.5-0.2,3,0,4.4
	c0.2,1.5-0.4,3-1.6,4c-8.3,6.6-9.7,18.7-3.1,27c0.9,1.2,2,2.2,3.1,3.1c1.2,0.9,1.8,2.4,1.6,3.9C8,78.7,15.6,88.3,26.1,89.5
	c1.5,0.2,3,0.2,4.4,0c1.5-0.2,3,0.4,4,1.6c6.6,8.3,18.7,9.7,27,3.1c1.2-0.9,2.2-2,3.1-3.1c1-1.2,2.5-1.8,4-1.6
	c10.5,1.2,20.1-6.3,21.3-16.9c0.2-1.5,0.2-3,0-4.4c-0.2-1.5,0.4-3,1.6-3.9c4.6-3.7,7.3-9.2,7.3-15.1S96.1,37.8,91.5,34.1z
	 M55.2,31.5c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9C52.3,32.8,53.6,31.5,55.2,31.5z M44,31.5
	c1.6,0,2.9,1.3,2.9,2.9c0,1.6-1.3,2.9-2.9,2.9s-2.9-1.3-2.9-2.9C41.1,32.8,42.4,31.5,44,31.5z M61.8,67.2c0.7,0.8,0.7,1.9,0,2.7
	s-2,0.8-2.8,0.1l-9.4-9.4l-9.5,9.5c-0.8,0.8-2,0.8-2.8,0c-0.8-0.8-0.8-2,0-2.8l9.5-9.5l-9.4-9.4c-0.8-0.8-0.8-2,0-2.8
	c0.8-0.8,2-0.8,2.8,0l9.4,9.4l9.5-9.5c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8l-9.5,9.5L61.8,67.2z"
            />
          </svg>
        </a>
      </CSSTransition>
    );
  }

  private handleClick() {
    this.props.closeMenu();
  }
}

export default CloseMenuButton;
