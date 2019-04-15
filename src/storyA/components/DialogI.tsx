import * as React from "react";
import DialogIText from "./DialogIText";
import { CSSTransition } from "react-transition-group";

interface IDialogIProps {
  isShowDialog: boolean;
}

class DialogI extends React.Component<IDialogIProps> {
  constructor(props: IDialogIProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <div className="dialogI dialogGHI">
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogI-background dialogGHI-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 344.176 294.544"
            >
              <path
                fill="#FCFAEE"
                d="M344.2,147.9c0-24.9-14-46.5-34.6-57.5c-1-0.5-1.6-1.5-1.5-2.6c0.1-5.1-0.4-10.3-1.5-15.5
	c-7.7-35.1-42.4-57.3-77.5-49.6c-1.5,0.3-2.9,0.7-4.4,1.1c-1.1,0.3-2.3,0-3-0.9C209.8,8.9,192,0,172.1,0c-19.9,0-37.7,8.9-49.6,23
	c-0.7,0.9-1.9,1.2-3,0.9c-28.1-8.3-59.3,3.4-74.7,29.9c-6.2,10.7-9,22.5-8.7,34c0,1.1-0.6,2.1-1.5,2.6C14,101.4,0,123,0,147.9
	c0,24.9,14,46.5,34.5,57.5c0.9,0.5,1.5,1.5,1.5,2.6c-0.1,11.1,2.7,22.4,8.7,32.8c15.3,26.5,46.5,38.2,74.7,29.9c1.1-0.3,2.3,0,3,0.9
	c11.9,14.1,29.7,23,49.6,23c19.9,0,37.7-8.9,49.6-23c0.7-0.9,1.9-1.2,3-0.9c28.1,8.3,59.3-3.4,74.7-29.9c6-10.3,8.8-21.6,8.7-32.8
	c0-1.1,0.6-2.1,1.5-2.6C330.2,194.5,344.2,172.8,344.2,147.9z"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogIText />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default DialogI;
