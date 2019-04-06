import * as React from "react";

interface IPatternHProps {
  isShowPattern: boolean;
  handleClick: () => void;
}

class PatternH extends React.Component<IPatternHProps> {
  constructor(props: IPatternHProps) {
    super(props);
  }

  public render() {
    return (
      <a onClick={this.props.handleClick}>
        <svg
          className={`patternH ${this.props.isShowPattern ? "show" : ""}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 35.365 82.586"
        >
          <g>
            <path
              fill="#4190C0"
              d="M7.674,82.277c-3.812-0.939-6.243-3.154-7.293-6.646c-0.474-1.662-0.506-3.322-0.096-4.986
		c0.921-3.742,3.259-6.068,7.013-6.984c1.643-0.402,3.296-0.4,4.959,0.01c3.742,0.922,6.146,3.094,7.216,6.518
		c0.524,1.748,0.574,3.486,0.148,5.219c-0.923,3.744-3.251,6.035-6.987,6.879C10.99,82.689,9.338,82.687,7.674,82.277z M9.991,54.07
		l6.532-39.959L19.668,0l15.697,3.865l-3.769,13.957L18.723,56.22L9.991,54.07z"
            />
          </g>
        </svg>
      </a>
    );
  }
}

export default PatternH;
