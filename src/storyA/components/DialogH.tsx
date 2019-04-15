import * as React from "react";
import DialogHText from "./DialogHText";
import { CSSTransition } from "react-transition-group";

interface IDialogHProps {
  isShowDialog: boolean;
}

class DialogH extends React.Component<IDialogHProps> {
  constructor(props: IDialogHProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <div className="dialogH dialogGHI">
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogH-background dialogGHI-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 325.99 247.411"
            >
              <path
                fill="#E77452"
                d="M163,0c90,0,163,55.4,163,123.7c0,31.2-15.2,59.6-40.3,81.4c-0.4,0.4-0.5,1-0.2,1.5l27.6,37.3
	c0.7,0.9-0.3,2.2-1.4,1.7L261.1,223c-0.3-0.1-0.7-0.1-1,0c-27.1,15.3-60.7,24.4-97.1,24.4C73,247.4,0,192,0,123.7C0,55.4,73,0,163,0
	"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogHText />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default DialogH;
