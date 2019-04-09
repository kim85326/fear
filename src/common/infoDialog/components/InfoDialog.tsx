import * as React from "react";
import "../static/infoDialog.css";
import CloseInfoDialogButton from "./CloseInfoDialogButton";
import { CSSTransition } from "react-transition-group";

interface IInfoDialogProps {
  backgroundColor: string;
  backgroundImage: string;
  isShow: boolean;
  handleClick: () => void;
}

class InfoDialog extends React.Component<IInfoDialogProps> {
  constructor(props: IInfoDialogProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShow}
        timeout={{ enter: 2000, exit: 1000 }}
        classNames="show"
      >
        <div className="info-dialog-wrapper">
          <div className="info-dialog-mask" />
          <CSSTransition
            in={this.props.isShow}
            timeout={{ enter: 2000, exit: 1000 }}
            classNames="slide"
          >
            <div
              className="info-dialog"
              style={{ backgroundColor: this.props.backgroundColor }}
            >
              <img
                className="info-dialog-background"
                src={this.props.backgroundImage}
              />
              <CSSTransition
                in={this.props.isShow}
                timeout={{ enter: 2000, exit: 1000 }}
                classNames="fade"
              >
                <div className="info-dialog-content">{this.props.children}</div>
              </CSSTransition>
            </div>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShow}
            timeout={{ exit: 1000 }}
            classNames="zoom"
          >
            <CloseInfoDialogButton handleClick={this.props.handleClick} />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default InfoDialog;
