import * as React from "react";

interface IPatternGProps {
  handleClick: () => void;
}

class PatternG extends React.Component<IPatternGProps> {
  constructor(props: IPatternGProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className="patternG"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 45.748 47.24"
      >
        <a className="patternG-button" onClick={this.props.handleClick}>
          <g>
            <path
              fill="#E99415"
              d="M21.912,47.239c-4.607-0.155-2.237-8.197-7.73-9.871c-6.424-1.957-11.48,2.984-13.206-0.48
		c-2.004-4.025,6.508-6.514,6.215-11.738c-0.242-4.317-8.243-4.907-7.076-9.139c1.586-5.748,8.264-0.458,12.053-3.789
		c3.789-3.331-2.027-10.512,2.866-12.043c5.439-1.703,4.394,9.336,9.901,10.055c3.66,0.478,7.164-7.392,10.627-6.085
		c5.047,1.904-2.354,10.251-0.633,12.785c1.975,2.906,10.25-0.302,10.795,4.059c0.496,3.972-7.314,2-9.438,7.032
		c-1.731,4.104,6.68,8.14,4.531,11.256c-2.324,3.373-7.546-2.375-10.801-1.247C25.665,39.542,25.425,47.358,21.912,47.239z"
            />
            <g>
              <path
                fill="#FFFFFF"
                d="M19.706,28.132c-0.179-1.2,0.298-2.304,1.428-3.31c0.232-0.211,0.594-0.5,1.085-0.877
			c0.897-0.698,1.464-1.235,1.698-1.617c0.176-0.296,0.268-0.592,0.272-0.893c0.021-1.112-0.529-1.85-1.649-2.212
			c-0.411-0.135-0.873-0.209-1.385-0.218c-1.454-0.011-2.748,0.585-3.881,1.791l-1.43-1.353c1.599-1.695,3.475-2.53,5.626-2.504
			c2.081,0.038,3.566,0.663,4.457,1.875c0.5,0.68,0.742,1.491,0.725,2.431c-0.018,0.969-0.547,1.886-1.59,2.75
			c-0.188,0.152-0.47,0.377-0.845,0.668c-0.969,0.725-1.593,1.313-1.872,1.762c-0.338,0.537-0.47,1.119-0.396,1.747L19.706,28.132z
			 M18.826,31.772c0.015-0.811,0.374-1.375,1.079-1.69c0.287-0.121,0.595-0.181,0.922-0.175c0.812,0.016,1.391,0.346,1.736,0.994
			c0.151,0.289,0.224,0.603,0.218,0.943c-0.014,0.799-0.367,1.362-1.058,1.692c-0.301,0.138-0.624,0.202-0.965,0.196
			c-0.812-0.015-1.391-0.354-1.735-1.016C18.885,32.428,18.82,32.114,18.826,31.772z"
              />
            </g>
          </g>
        </a>
      </svg>
    );
  }
}

export default PatternG;
