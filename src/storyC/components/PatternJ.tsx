import * as React from "react";

interface IPatternJProps {
  isShowPattern: boolean;
  handleClick: () => void;
}

class PatternJ extends React.Component<IPatternJProps> {
  constructor(props: IPatternJProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className={`patternJ ${this.props.isShowPattern ? "show" : ""}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 35.365 82.586"
      >
        <a onClick={this.props.handleClick}>
          <path
            fill="#fff"
            d="M34,7.35A11.62,11.62,0,0,0,26.56.6,13,13,0,0,0,22.66,0C13.94,0,6.74,9.45,3.41,25.3,1.2,35.8,1.07,47,4.2,52.47A7,7,0,0,0,.3,56.59,7,7,0,0,0,.36,61.2a6.51,6.51,0,0,0,4.09,4,6.76,6.76,0,0,0,2.21.38A6.84,6.84,0,0,0,13,61a6.66,6.66,0,0,0-.59-5.64c4.62-1.81,11-8,17.55-20.95C33.88,26.74,37.25,15,34,7.35Z"
          />
          <path
            fill="#fa0"
            d="M5.37,62.68a4.07,4.07,0,0,1-2.5-5.2A4,4,0,0,1,8.06,55a4.09,4.09,0,1,1-2.69,7.73Z"
          />
          <path
            fill="#fa0"
            d="M8.76,53.2c-4-1.1-5.85-12.34-2.7-27.34C9,12.11,15.89,0,25.82,3.15c10.8,3.38,6.89,20.14,1.87,30.09C21.63,45.23,13.54,54.52,8.76,53.2Z"
          />
          <path
            fill="#ffca2a"
            d="M7.24,25.07a13.6,13.6,0,0,1,4,.49c1.74.4,3.86,1.11,3.81,1.3s-2-.45-3.9-.88S7.24,25.32,7.24,25.07Z"
          />
          <path
            fill="#ffca2a"
            d="M9.51,27.7c0-.23,1.34-.06,3.19.36s3,.84,2.89,1-1-.17-3-.61S9.47,28,9.51,27.7Z"
          />
          <path
            fill="#ffca2a"
            d="M7.36,31.19a6,6,0,0,1,2.38.24,6.76,6.76,0,0,1,2.3.73c0,.18-1-.19-2.36-.49A11.44,11.44,0,0,1,7.36,31.19Z"
          />
          <path
            fill="#ffca2a"
            d="M7.14,22.43a6.28,6.28,0,0,1,2.4.11,9.2,9.2,0,0,1,3,.93c0,.18-1.65-.46-3.06-.68A13.17,13.17,0,0,1,7.14,22.43Z"
          />
        </a>
      </svg>
    );
  }
}

export default PatternJ;
