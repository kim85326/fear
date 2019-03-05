import * as React from "react";
import DialogE from "./DialogE";
import PersonCWhiteBorder from "./PersonCWhiteBorder";

interface IPersonCState {
  isHover: boolean;
  isShowingDialog: boolean;
  isHidingDialog: boolean;
  dialogX: number;
  dialogY: number;
}

class PersonC extends React.Component<{}, IPersonCState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isHover: false,
      isShowingDialog: false,
      isHidingDialog: false,
      dialogX: 0,
      dialogY: 0
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  public render() {
    return (
      <div className="personC-wrapper">
        <svg
          className="personC"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 203.75 152"
        >
          {this.state.isHover ? <PersonCWhiteBorder /> : null}}
          <a
            onMouseMove={this.onMouseMoveHandler}
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
          >
            <path
              fill="#FCFAEE"
              d="M27.159,107.266c-2.04,1.4-3.45,3.17-3.89,5.26c-7.26-0.08-12.53-2.01-13.03-7.189
	c-0.45-4.721,4.59-8.961,12-9.861C23.449,100.416,25.239,104.445,27.159,107.266z"
            />
            <path
              fill="#FCFAEE"
              d="M193.738,100.566c-5.059,2.949-9.59-8.771-9.59-8.771c-5.799,22.271-34.77,33.83-47.27,29.9
	c-18.129,1.1-86.11,1.09-97.06,1.09c-6.729,0-16.36-0.59-16.7-8.48c-0.029-0.619,0.02-1.209,0.15-1.779
	c0.439-2.09,1.85-3.859,3.89-5.26c-1.92-2.82-3.71-6.85-4.92-11.791c-1.101-4.42-1.72-9.568-1.56-15.229
	c1.09-38.39,33.809-65.26,78.129-68.38c44.35-3.13,91.75,16.729,91.75,56.76c0,3.12,0.16,6.89,0.51,10.769
	c0.24,2.621,0.91,8.051,1.5,10.611C193.869,95.666,196.18,99.145,193.738,100.566z"
            />
            <path
              fill="#4F4942"
              d="M87.599,52.959c7.201-1.646,12.639,5.898,13.9,26.255c1.201,19.414,9.465,32.762,17.297,38.613
	c6.434,4.807,11.873,11.693,7.414,17.916c-2.256,3.15-9.262,5.908-18.122,5.908c-9.064,0-17.408-2.477-23.922-8.371
	c-6.873-6.217-11.889-16.471-11.889-36.035C72.279,76.922,75.757,55.665,87.599,52.959z"
            />
            <g>
              <path
                fill="#5B81B6"
                d="M84.324,36.042c2.055,2.563-0.398,4.963,3.76,7.139c4.77,2.495,10.402-2.013,11.783-7.139
		c1.164-4.328-2.193-7.517-2.383-10.654c-0.158-2.629-1.336-4.602-3.91-3.954c-2.885,0.726-2.377,3.425-4.613,4.079
		c-1.701,0.499-5.482,0.678-6.404,3.636C81.853,31.407,82.494,33.759,84.324,36.042z"
              />
              <path
                fill="#5B81B6"
                d="M150.129,68.425c-1.967-0.021-3.297,2.455-3.586,4.128c-0.309,1.782-0.064,4.083,0.893,4.58
		c1.248,0.645,3.406-0.318,4.582-4.064C153.098,69.633,151.662,68.442,150.129,68.425z"
              />
              <path
                fill="#5B81B6"
                d="M153.365,82.129c1.02,0.084,1.803-1.152,2.016-2.01c0.227-0.916,0.184-2.119-0.293-2.412
		c-0.625-0.383-1.781,0.039-2.531,1.939C151.867,81.391,152.568,82.063,153.365,82.129z"
              />
              <path
                fill="#5B81B6"
                d="M190.559,68.625c-7.795-1.46-13.264,6.446-22.154,5.018c-12.891-2.07-9.5-12.563-17.672-12.563
		c-8.422,0-8.236,11.785-16.016,8.974c-6.877-2.484-2.209-10.492-9.113-14.635c-4.961-2.978-8.449,1.227-12.979-2.678
		c-7.928-6.836,1.789-14.673-5.977-22.806c-7.68-8.044-2.84-18.319-2.84-18.319C146.648,10.255,190.559,30.095,190.559,68.625z"
              />
            </g>
          </a>
        </svg>
        <DialogE
          isShowDialog={this.state.isShowingDialog}
          dialogX={this.state.dialogX}
          dialogY={this.state.dialogY}
        />
      </div>
    );
  }

  private onMouseEnterHandler(event: React.MouseEvent<HTMLElement>): void {
    this.setState({
      isHover: true,
      isShowingDialog: true,
      isHidingDialog: false
    });
  }

  private onMouseMoveHandler(event: React.MouseEvent<HTMLElement>): void {
    this.setState({
      dialogX: event.nativeEvent.offsetX,
      dialogY: event.nativeEvent.offsetY
    });
  }

  private onMouseLeaveHandler(event: React.MouseEvent<HTMLElement>) {
    this.setState({
      isHover: false,
      isShowingDialog: false,
      isHidingDialog: true
    });
  }
}

export default PersonC;
