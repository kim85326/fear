import * as React from "react";
import "../static/originalPaintingDialog.css";
import CloseOriginalPaintingDialogButton from "./CloseOriginalPaintingDialogButton";
import OriginalPaintingDialogPicture from "./OriginalPaintingDialogPicture";

interface IOriginalPaintingDialogProps {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
  handleClick: () => void;
}

interface IOriginalPaintingDialogState {
  isShowDialogText: boolean;
}

class OriginalPaintingDialog extends React.Component<
  IOriginalPaintingDialogProps,
  IOriginalPaintingDialogState
> {
  constructor(props: IOriginalPaintingDialogProps) {
    super(props);
    this.state = {
      isShowDialogText: false
    };
  }

  public componentWillReceiveProps(nextProps: IOriginalPaintingDialogProps) {
    // props 要求顯示對話框時
    if (nextProps.isShowing && !this.props.isShowing) {
      // 1 秒後顯示對話框的文字
      setTimeout(() => {
        if (nextProps.isShowing) {
          this.setState({ isShowDialogText: true });
        }
      }, 1000);
    }

    // props 要求不顯示對話框時
    if (nextProps.isHiding && !this.props.isHiding) {
      // 0.5 秒後不顯示對話框的文字
      setTimeout(() => {
        if (nextProps.isHiding) {
          this.setState({ isShowDialogText: false });
        }
      }, 500);
    }
  }

  public render() {
    return (
      <div
        className={`original-painting-dialog-wrapper
            ${this.props.isShow ? "isShow" : ""}
        `}
      >
        <div className="original-painting-dialog-mask" />
        <span
          className={`original-painting-dialog
            ${this.props.isShowing ? "isShowing" : ""}
            ${this.props.isHiding ? "isHiding" : ""}
        `}
        >
          <OriginalPaintingDialogPicture />
        </span>
        <CloseOriginalPaintingDialogButton
          isHiding={this.props.isHiding}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default OriginalPaintingDialog;
