import * as React from "react";
import DialogJText from "./DialogJText";
import { CSSTransition } from "react-transition-group";

interface IDialogJProps {
  isShowDialog: boolean;
}

class DialogJ extends React.Component<IDialogJProps> {
  constructor(props: IDialogJProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <div className="dialogJ">
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogJ-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 287.538 218.229"
            >
              <path
                fill="#FCF8ED"
                d="M143.769,0c79.401,0,143.769,48.852,143.769,109.114c0,27.777-13.699,53.114-36.219,72.376
	l27.178,36.738l-48.626-21.727c-24.001,13.644-53.808,21.727-86.102,21.727C64.367,218.229,0,169.376,0,109.114
	C0,48.852,64.367,0,143.769,0z"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogJText />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default DialogJ;
