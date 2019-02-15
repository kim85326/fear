import * as React from "react";

interface ICloseLeadingStoryDialogButtonProps {
  handleClick: () => void;
}

interface ICloseLeadingStoryDialogButtonState {
  color: string;
}

class CloseLeadingStoryDialogButton extends React.Component<
  ICloseLeadingStoryDialogButtonProps,
  ICloseLeadingStoryDialogButtonState
> {
  public constructor(props: ICloseLeadingStoryDialogButtonProps) {
    super(props);
    this.state = {
      color: "#5B81B6"
    };
  }

  public render() {
    return (
      <a
        onClick={this.props.handleClick}
        className="close-leading-story-dialog-button"
        onMouseEnter={this.changeColor.bind(this, "#f17752")}
        onMouseLeave={this.changeColor.bind(this, "#5B81B6")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 84.664 51.963"
        >
          <g>
            <path
              fill={this.state.color}
              d="M14.777,6.412v4.284l0.729-0.845c3.002,1.515,7.549,3.992,9.734,5.828l-3.178,3.905
			c-1.516-1.457-4.547-3.438-7.285-5.07V27.6h-4.576V6.412H0V2.128h26.26v4.284H14.777z"
            />
            <path
              fill={this.state.color}
              d="M55.869,11.25v4.634H28.707V11.25H55.869z"
            />
            <path
              fill={this.state.color}
              d="M73.996,12.124v6.878c2.273-1.544,4.109-3.497,5.451-6.091l4.166,1.895
			c-4.691,8.335-12.473,11.337-23.461,12.911c-0.379-1.225-1.252-2.915-2.127-4.022c5.393-0.611,9.996-1.573,13.727-3.409h-2.303
			v-8.161H58.143V8.132h3.789V1.69h4.313v6.441h3.76V0h4.576v1.895h8.334v3.964H74.58v2.273h10.084v3.992H73.996z M68.285,14.136
			c-1.691,2.564-4.402,5.217-6.762,6.819c-0.699-0.816-2.244-2.419-3.148-3.147c2.215-1.195,4.547-3.147,5.828-5.101L68.285,14.136z
			"
            />
          </g>
          <circle className="dot" fill={this.state.color} cx="11.656" cy="46.315" r="5.647" />
          <circle className="dot" fill={this.state.color} cx="32.958" cy="46.315" r="5.647" />
          <circle className="dot" fill={this.state.color} cx="54.261" cy="46.315" r="5.647" />
          <circle className="dot" fill={this.state.color} cx="75.563" cy="46.315" r="5.647" />
        </svg>
      </a>
    );
  }

  private changeColor(color: string) {
    this.setState({ color });
  }
}

export default CloseLeadingStoryDialogButton;
