import * as React from "react";

interface IMoveLeftButtonProps {
  moveLeft: () => void;
}

class MoveLeftButton extends React.Component<IMoveLeftButtonProps> {
  private timer: any;

  constructor(props: IMoveLeftButtonProps) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  public render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 56.012 72.716"
        className="move-left-button"
      >
        <a onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
          <path
            fill="#E77452"
            d="M56.012,5.276v62.163c0,4.235-4.744,6.738-8.24,4.349L2.295,40.707c-3.061-2.092-3.061-6.606,0-8.698
	L47.771,0.928C51.268-1.462,56.012,1.042,56.012,5.276z"
          />
        </a>
      </svg>
    );
  }

  private handleMouseDown() {
    clearTimeout(this.timer);
    this.moveLeft();
    this.timer = setTimeout(this.handleMouseDown, 10);
  }

  private handleMouseUp() {
    clearTimeout(this.timer);
  }

  private moveLeft() {
    this.props.moveLeft();
  }
}

export default MoveLeftButton;
