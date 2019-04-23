import * as React from "react";
import DialogMText from "./DialogMText";
import { CSSTransition } from "react-transition-group";

interface IDialogMProps {
  isShowDialog: boolean;
  handleClick: () => void;
}

class DialogM extends React.Component<IDialogMProps> {
  constructor(props: IDialogMProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <a className="dialogM dialogLMNO" onClick={this.props.handleClick}>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogM-background dialogLMNO-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 140.7 106.1"
            >
              <path
                fill="#f17752"
                d="M70.4.3c38.3,0,69.4,23.6,69.4,52.7,0,13.1-6.3,25-16.7,34.2a1.21,1.21,0,0,0-.2,1.5l9.9,13.4a1.14,1.14,0,0,1-1.4,1.7l-19-8.5a1.7,1.7,0,0,0-1,0,84.8,84.8,0,0,1-41.1,10.2C32.1,105.6,1.1,82,1.1,52.9S32.1.3,70.4.3Z"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogMText />
          </CSSTransition>
        </a>
      </CSSTransition>
    );
  }
}

export default DialogM;
