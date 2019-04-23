import * as React from "react";
import DialogOText from "./DialogOText";
import { CSSTransition } from "react-transition-group";

interface IDialogOProps {
  isShowDialog: boolean;
  handleClick: () => void;
}

class DialogO extends React.Component<IDialogOProps> {
  constructor(props: IDialogOProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <a className="dialogO dialogLMNO" onClick={this.props.handleClick}>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogO-background dialogLMNO-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 140.7 106.1"
            >
              <path
                fill="#F17752"
                d="M70.4,0.3c38.3,0,69.4,23.6,69.4,52.7c0,13.1-6.3,25-16.7,34.2c-0.4,0.4-0.5,1-0.2,1.5l9.9,13.4
		c0.7,0.9-0.3,2.2-1.4,1.7l-19-8.5c-0.3-0.1-0.7-0.1-1,0c-11.5,6.4-25.7,10.2-41.1,10.2C32.1,105.6,1.1,82,1.1,52.9
		S32.1,0.3,70.4,0.3z"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogOText />
          </CSSTransition>
        </a>
      </CSSTransition>
    );
  }
}

export default DialogO;
