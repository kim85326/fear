import * as React from "react";

interface IPatternIProps {
  handleClick: () => void;
}

class PatternI extends React.Component<IPatternIProps> {
  constructor(props: IPatternIProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="patternI"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 45.748 47.24"
      >
        <a className="patternI-button" onClick={this.props.handleClick}>
          <g>
            <path
              fill="#E99415"
              d="M17.112,36.89c-3.6-0.121-1.748-6.402-6.037-7.709c-5.018-1.527-8.967,2.33-10.313-0.375   c-1.566-3.143,5.082-5.086,4.854-9.166c-0.189-3.373-6.438-3.832-5.525-7.139c1.238-4.488,6.453-0.357,9.412-2.957   c2.959-2.602-1.584-8.209,2.238-9.404c4.248-1.33,3.432,7.291,7.732,7.852c2.859,0.373,5.594-5.773,8.299-4.752   c3.941,1.486-1.838,8.004-0.494,9.982c1.543,2.27,8.004-0.234,8.43,3.17c0.389,3.104-5.711,1.563-7.369,5.492   c-1.352,3.205,5.217,6.357,3.539,8.791c-1.814,2.633-5.895-1.855-8.436-0.975C20.042,30.878,19.854,36.983,17.112,36.89z"
            />
            <text
              transform="matrix(0.9998 0.0182 -0.0182 0.9998 10.1572 26.1172)"
              fill="#FFFFFF"
            >
              ？
            </text>
          </g>
        </a>
      </svg>
    );
  }
}

export default PatternI;
