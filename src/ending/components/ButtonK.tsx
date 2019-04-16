import * as React from "react";
import ButtonKText from "./ButtonKText";
import { CSSTransition } from "react-transition-group";

interface IButtonKProps {
  isShowButton: boolean;
  handleClick: () => void;
}

class ButtonK extends React.Component<IButtonKProps> {
  constructor(props: IButtonKProps) {
    super(props);
  }

  public render() {
    return (
      <a
        onClick={this.props.handleClick}
        className={`buttonK ${this.props.isShowButton ? "show" : ""}`}
      >
        <CSSTransition
          in={this.props.isShowButton}
          timeout={{ enter: 1000 }}
          classNames="zoom"
        >
          <svg
            className="buttonK-background"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 214.06 82.51"
          >
            <g>
              <path
                fill="#70896c"
                d="M164.45,43.92s8.34-2.7,27.92,3.26c11.15,3.4,17.41,10.3,14.46,16.92-2.58,5.78-12.3,6.23-22.33-.12C173.74,57.16,164.45,43.92,164.45,43.92Z"
              />
              <path
                fill="#abc46c"
                d="M164.4,37.85s3.32-8.11,20.51-19.22c9.79-6.32,19.1-6.65,22.25-.12,2.75,5.7-3.18,13.41-14.5,17C180.51,39.31,164.4,37.85,164.4,37.85Z"
              />
              <path
                fill="#79a045"
                d="M167.14,39.62s6.51-5.86,26.83-8.4c11.56-1.44,20.09,2.31,20.09,9.56,0,6.33-8.69,10.7-20.44,9C181,47.93,167.14,39.62,167.14,39.62Z"
              />
              <path
                fill="#e57351"
                d="M172.13,23.43C161.32,4.33,130.68-.06,110.51-.06,56.57-.06,0,16.92,0,42.46c0,26.1,63.64,43.6,130.24,39.44,20.72-1.3,28.31-6.24,38.5-17.28C178.38,54.18,179.38,36.26,172.13,23.43Z"
              />
            </g>
          </svg>
        </CSSTransition>
        <CSSTransition
          in={this.props.isShowButton}
          timeout={{ enter: 1000 }}
          classNames="show"
        >
          <ButtonKText />
        </CSSTransition>
      </a>
    );
  }
}

export default ButtonK;
