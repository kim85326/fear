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
                d="M143.8,0c79.4,0,143.8,48.9,143.8,109.1c0,27.4-13.4,52.5-35.4,71.7c-0.4,0.4-0.5,1-0.2,1.5l24,32.4
	c0.7,0.9-0.3,2.2-1.4,1.7l-44.2-19.7c-0.3-0.1-0.7-0.1-1,0c-23.9,13.5-53.5,21.4-85.6,21.4C64.4,218.2,0,169.4,0,109.1
	S64.4,0,143.8,0z"
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
