import * as React from "react";
import DialogCText from "./DialogCText";
import { CSSTransition } from "react-transition-group";

interface IDialogCProps {
  isShowDialog: boolean;
}

class DialogC extends React.Component<IDialogCProps> {
  constructor(props: IDialogCProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <div className="dialogC">
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogC-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 226.8 172.1"
            >
              <path
                fill="#E7E3E3"
                d="M113.4,0C176,0,226.8,38.5,226.8,86.1c0,21.6-10.5,41.3-27.8,56.4c-0.4,0.4-0.5,1-0.2,1.5l18.2,24.7
	c0.7,0.9-0.3,2.2-1.4,1.7l-33.9-15.1c-0.3-0.1-0.7-0.1-1,0c-18.8,10.6-42.2,16.9-67.4,16.9C50.8,172.1,0,133.6,0,86.1
	S50.8,0,113.4,0z"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogCText />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default DialogC;
