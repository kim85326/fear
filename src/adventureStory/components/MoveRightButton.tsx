import * as React from "react";

interface IMoveRightButtonProps {
  moveRight: () => void;
}

class MoveRightButton extends React.Component<IMoveRightButtonProps> {
  private timer: any;

  constructor(props: IMoveRightButtonProps) {
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
        className="move-right-button"
      >
        <a onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
          <path
            fill="#E77452"
            d="M0,5.276v62.163c0,4.235,4.744,6.738,8.24,4.349l45.477-31.081c3.061-2.092,3.061-6.606,0-8.698
	L8.24,0.928C4.744-1.462,0,1.042,0,5.276z"
          />
        </a>
      </svg>
    );
  }

  private handleMouseDown() {
    clearTimeout(this.timer);
    this.move();
    this.timer = setTimeout(this.handleMouseDown, 10);
  }

  private handleMouseUp() {
    clearTimeout(this.timer);
  }

  private move() {
    this.props.moveRight();
  }
}

export default MoveRightButton;
