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
        <a onClick={this.props.handleClick}>
          <path
            fill="#fff"
            d="M24.9,47.24a6.51,6.51,0,0,1-6-3.08,4.05,4.05,0,0,0-2.07-1.75,3.29,3.29,0,0,0-1-.17,8.79,8.79,0,0,0-2.22.41,9.78,9.78,0,0,1-2.68.48,4.7,4.7,0,0,1-2.77-.87c-2.24-1.57-1.87-3.94-1.6-5.68a6.07,6.07,0,0,0-.11-3.47,4.75,4.75,0,0,0-2.09-1.66c-1.74-1-4.12-2.34-4.12-5.72,0-2.95,1.82-4.18,3.16-5.08A5.63,5.63,0,0,0,5.59,18.4c.36-.76.06-2-.24-3.26-.47-2-1-4.42.86-6.21A5.26,5.26,0,0,1,10,7.54a15.49,15.49,0,0,1,2.18.2A14.83,14.83,0,0,0,14,7.91a2.54,2.54,0,0,0,1.41-.34,5.58,5.58,0,0,0,2-3C18.06,2.75,19,.27,22.41,0l.5,0c3.42,0,4.5,2.7,5.22,4.49.46,1.13.85,2.11,1.57,2.45A2.77,2.77,0,0,0,31,7.22a10.53,10.53,0,0,0,2.23-.36,11.27,11.27,0,0,1,2.67-.42,4.69,4.69,0,0,1,2.9.94c2,1.51,1.65,3.86,1.37,5.74a5.81,5.81,0,0,0,0,3.07A4.09,4.09,0,0,0,42,17.68c1.53.9,3.62,2.13,3.62,5.68a6.21,6.21,0,0,1-2.8,5.23,3.84,3.84,0,0,0-1.55,1.87,7.1,7.1,0,0,0,0,3.52c.27,1.47.61,3.31-.83,4.92a4.15,4.15,0,0,1-3.29,1.36,12.17,12.17,0,0,1-1.44-.1c-.42,0-.86-.09-1.3-.09a3.07,3.07,0,0,0-2,.65,5.91,5.91,0,0,0-1.45,2.16C30,44.72,28.74,47.24,24.9,47.24Z"
          />
          <path
            fill="#fff"
            d="M1.85,25.73c0-3.67,3.65-3.22,5.26-6.6,1.34-2.81-2-6.89.25-9,2.45-2.29,6.13.57,8.89-1.16,3.44-2.14,2.12-7,6.28-7.3C27,1.37,25.88,7,29,8.46s6.39-1.56,8.79.27c2.21,1.67-.43,5.6.92,8.23s5.21,2.1,5.21,6.4c0,3.78-3.38,3.64-4.28,6.62-1,3.48,1.26,5.9-.43,7.79s-4.84-.71-7.86,1.61c-2.47,1.9-2,6.18-6.42,6.18-5,0-3.95-3.51-7.55-4.74-3.24-1.11-5.84,1.78-8.29.06s.36-5.14-1.14-8.46C6.67,29.65,1.85,29.83,1.85,25.73Z"
          />
          <path
            fill="#5d87c0"
            d="M1.85,25.73c0-3.67,3.65-3.22,5.26-6.6,1.34-2.81-2-6.89.25-9,2.45-2.29,6.13.57,8.89-1.16,3.44-2.14,2.12-7,6.28-7.3C27,1.37,25.88,7,29,8.46s6.39-1.56,8.79.27c2.21,1.67-.43,5.6.92,8.23s5.21,2.1,5.21,6.4c0,3.78-3.38,3.64-4.28,6.62-1,3.48,1.26,5.9-.43,7.79s-4.84-.71-7.86,1.61c-2.47,1.9-2,6.18-6.42,6.18-5,0-3.95-3.51-7.55-4.74-3.24-1.11-5.84,1.78-8.29.06s.36-5.14-1.14-8.46C6.67,29.65,1.85,29.83,1.85,25.73Z"
          />
          <path
            fill="#fff"
            d="M26.32,20.85c0-1.52-1.11-2.55-3.27-2.59a5.18,5.18,0,0,0-3.5,1.28,1,1,0,0,1-1.39-.06h0a1.06,1.06,0,0,1,0-1.57A7.54,7.54,0,0,1,23.4,16c3.33.06,5.6,1.75,5.55,4.64-.06,3.15-4.45,3.86-5,6.47a1.1,1.1,0,0,1-1.07.93h-.2a1.14,1.14,0,0,1-1.1-1.4C22.26,24,26.28,23,26.32,20.85Zm-3.63,9a1.37,1.37,0,0,1,1.42,1.42,1.38,1.38,0,0,1-1.47,1.38,1.4,1.4,0,1,1,.05-2.8Z"
          />
          <path
            fill="#37baaf"
            d="M12.79,39c.23-.51.75-.1.64.37S12.43,39.62,12.79,39Z"
          />
          <path
            fill="#37baaf"
            d="M24.41,42.85c.23-.5.75-.1.64.37S24.05,43.52,24.41,42.85Z"
          />
          <path
            fill="#37baaf"
            d="M11.08,36.9c.24-.52,1.35-.11.82.57S10.7,37.6,11.08,36.9Z"
          />
          <path
            fill="#37baaf"
            d="M13.3,37c.07-.21.49-.17.42.32C13.68,37.66,12.92,37.73,13.3,37Z"
          />
          <path
            fill="#37baaf"
            d="M29.45,37.37c.07-.21.5-.17.43.32C29.83,38,29.08,38.06,29.45,37.37Z"
          />
          <path
            fill="#37baaf"
            d="M11.14,39.31c.2.09-.12.59-.28.45S10.71,39.19,11.14,39.31Z"
          />
          <path
            fill="#37baaf"
            d="M15.33,38.38c.14.06-.09.45-.2.34S15,38.28,15.33,38.38Z"
          />
          <path
            fill="#37baaf"
            d="M10.07,32.64c.2.09-.12.58-.28.45S9.64,32.52,10.07,32.64Z"
          />
          <path
            fill="#37baaf"
            d="M22,41.36c.2.19-.12.61-.28.45S21.66,41.06,22,41.36Z"
          />
          <path
            fill="#37baaf"
            d="M26.71,41.09c.2.09-.12.58-.28.45S26.28,41,26.71,41.09Z"
          />
        </a>
      </svg>
    );
  }
}

export default PatternG;
