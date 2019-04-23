import * as React from "react";
import DialogNText from "./DialogNText";
import { CSSTransition } from "react-transition-group";

interface IDialogNProps {
  isShowDialog: boolean;
  handleClick: () => void;
}

class DialogN extends React.Component<IDialogNProps> {
  constructor(props: IDialogNProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <a className="dialogN dialogLMNO" onClick={this.props.handleClick}>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogN-background dialogLMNO-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 140.7 106.1"
            >
              <path
                fill="#f17752"
                d="M70.4.3C32.1.3,1,23.9,1,52.9,1,66,7.3,77.9,17.7,87.2a1.21,1.21,0,0,1,.2,1.5l-10,13.5a1.14,1.14,0,0,0,1.4,1.7l19.1-8.5a1.7,1.7,0,0,1,1,0,84.8,84.8,0,0,0,41.1,10.2c38.3,0,69.4-23.6,69.4-52.7S108.7.3,70.4.3Z"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogNText />
          </CSSTransition>
        </a>
      </CSSTransition>
    );
  }
}

export default DialogN;
