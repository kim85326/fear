import * as React from "react";
import "../static/originalPaintingDialog.css";
import CloseOriginalPaintingDialogButton from "./CloseOriginalPaintingDialogButton";
import OriginalPaintingDialogPicture from "./OriginalPaintingDialogPicture";
import { CSSTransition } from "react-transition-group";

interface IOriginalPaintingDialogProps {
  isShow: boolean;
  handleClick: () => void;
}

class OriginalPaintingDialog extends React.Component<
  IOriginalPaintingDialogProps
> {
  constructor(props: IOriginalPaintingDialogProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShow}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <div className="original-painting-dialog-wrapper">
          <div className="original-painting-dialog-mask" />
          <CSSTransition
            in={this.props.isShow}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <div className="original-painting-dialog">
              <OriginalPaintingDialogPicture />
            </div>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShow}
            timeout={{ exit: 1000 }}
            classNames="zoom"
          >
            <CloseOriginalPaintingDialogButton
              handleClick={this.props.handleClick}
            />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default OriginalPaintingDialog;
