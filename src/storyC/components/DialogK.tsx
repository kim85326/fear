import * as React from "react";
import DialogKText from "./DialogKText";
import { CSSTransition } from "react-transition-group";

interface IDialogKProps {
  isShowDialog: boolean;
}

class DialogK extends React.Component<IDialogKProps> {
  constructor(props: IDialogKProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <div className="dialogK">
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogK-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 287.537 218.229"
            >
              <path
                fill="#FCF8ED"
                d="M143.77,0C64.369,0,0,48.853,0,109.114c0,27.777,13.699,53.115,36.221,72.377l-27.18,36.738
	l48.627-21.727c24.002,13.643,53.809,21.727,86.102,21.727c79.4,0,143.768-48.854,143.768-109.115S223.17,0,143.77,0z"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogKText />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default DialogK;
