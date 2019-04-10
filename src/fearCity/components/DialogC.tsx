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
              viewBox="0 0 226.765 172.104"
            >
              <path
                style={{ fill: "#E7E3E3" }}
                d="M113.382,0c62.619,0,113.383,38.526,113.383,86.052c0,21.906-10.805,41.888-28.564,57.079
            l21.436,28.973l-38.35-17.134c-18.93,10.76-42.436,17.134-67.904,17.134C50.763,172.104,0,133.577,0,86.052S50.763,0,113.382,0z"
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
