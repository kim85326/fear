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
                style={{ fill: "#E77452" }}
                d="M162.995,0c90.02,0,162.996,55.385,162.996,123.706c0,31.491-15.531,60.217-41.063,82.055
	l30.813,41.65l-55.129-24.631c-27.211,15.468-61.004,24.631-97.617,24.631C72.975,247.411,0,192.026,0,123.706
	C0,55.385,72.975,0,162.995,0"
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
