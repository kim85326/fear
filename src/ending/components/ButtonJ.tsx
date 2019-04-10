import * as React from "react";
import { Link } from "react-router-dom";
import ButtonJText from "./ButtonJText";
import { CSSTransition } from "react-transition-group";

interface IButtonJProps {
  isShowButton: boolean;
}

class ButtonJ extends React.Component<IButtonJProps> {
  constructor(props: IButtonJProps) {
    super(props);
  }

  public render() {
    return (
      <Link
        to="/submitFear"
        className={`buttonJ ${this.props.isShowButton ? "show" : ""}`}
      >
        <CSSTransition
          in={this.props.isShowButton}
          timeout={{ enter: 1000 }}
          classNames="zoom"
        >
          <svg
            className="buttonJ-background"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 214.06 82.57"
          >
            <g>
              <path
                fill="#70896c"
                d="M49.61,44s-8.34-2.7-27.93,3.26c-11.14,3.4-17.4,10.3-14.45,16.92,2.58,5.78,12.3,6.23,22.33-.12C40.32,57.22,49.61,44,49.61,44Z"
              />
              <path
                fill="#abc46c"
                d="M49.66,37.91S46.34,29.8,29.15,18.69C19.36,12.37,10.05,12,6.9,18.57c-2.75,5.7,3.18,13.41,14.5,17C33.55,39.37,49.66,37.91,49.66,37.91Z"
              />
              <path
                fill="#79a045"
                d="M46.92,39.68s-6.52-5.86-26.83-8.4C8.52,29.84,0,33.59,0,40.84c0,6.33,8.69,10.7,20.44,9C33,48,46.92,39.68,46.92,39.68Z"
              />
              <path
                fill="#e57351"
                d="M41.93,23.49C52.74,4.39,83.37,0,103.55,0c53.94,0,110.51,17,110.51,42.52,0,26.1-63.64,43.6-130.25,39.44-20.71-1.3-28.3-6.24-38.49-17.28C35.68,54.24,34.67,36.32,41.93,23.49Z"
              />
            </g>
          </svg>
        </CSSTransition>
        <CSSTransition
          in={this.props.isShowButton}
          timeout={{ enter: 1000 }}
          classNames="show"
        >
          <ButtonJText />
        </CSSTransition>
      </Link>
    );
  }
}

export default ButtonJ;
