import * as React from "react";
import DialogFText from "./DialogFText";

interface IDialogFProps {
  isShowDialog: boolean;
  dialogX: number;
  dialogY: number;
}

interface IDialogFState {
  isShowDialog: boolean;
  isShowingDialogBackground: boolean;
  isHidingDialogBackground: boolean;
  isShowDialogText: boolean;
}

class DialogF extends React.Component<IDialogFProps, IDialogFState> {
  constructor(props: IDialogFProps) {
    super(props);
    this.state = {
      isShowDialog: false,
      isShowingDialogBackground: false,
      isHidingDialogBackground: false,
      isShowDialogText: false
    };
  }

  public componentWillReceiveProps(nextProps: IDialogFProps) {
    // 當 props 改變，且顯示對話框時
    if (nextProps.isShowDialog && !this.props.isShowDialog) {
      // 顯示對話框背景
      this.showDialogBackground();

      // 0.5 秒後顯示對話框的文字
      setTimeout(() => {
        this.setState({ isShowDialogText: true });
      }, 500);
    }

    // 當 props 改變，且不顯示對話框時
    if (!nextProps.isShowDialog && this.props.isShowDialog) {
      // 不顯示對話框背景
      this.hideDialogBackground();

      // 0.5 秒後不顯示對話框的文字
      setTimeout(() => {
        this.setState({ isShowDialogText: false });
      }, 500);
    }
  }

  public render() {
    return (
      <div
        className={`dialogF ${this.state.isShowDialog ? "show" : ""}`}
        style={{ top: this.props.dialogY, left: this.props.dialogX }}
      >
        <DialogFText isShowDialogText={this.state.isShowDialogText} />
        <svg
          className={`dialogF-background 
          ${this.state.isShowingDialogBackground ? "isShowing" : ""}
          ${this.state.isHidingDialogBackground ? "isHiding" : ""}
        `}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 152.217 105.309"
        >
          <a>
            <path
              fill={"#FCFAEE"}
              d="M141.219,0H10.999C4.934,0,0,4.934,0,10.999v83.312c0,6.064,4.934,10.998,10.999,10.998h130.221
	c6.064,0,10.998-4.934,10.998-10.998V10.999C152.217,4.934,147.284,0,141.219,0z"
            />
          </a>
        </svg>
      </div>
    );
  }

  private showDialogBackground() {
    this.setState({
      isShowDialog: true,
      isShowingDialogBackground: true
    });
    setTimeout(() => {
      if (this.props.isShowDialog) {
        this.setState({ isShowingDialogBackground: false });
      }
    }, 1000);
  }

  private hideDialogBackground() {
    this.setState({ isHidingDialogBackground: true });
    setTimeout(() => {
      if (!this.props.isShowDialog) {
        this.setState({
          isShowDialog: false
        });
      }
      this.setState({
        isHidingDialogBackground: false
      });
    }, 1000);
  }
}

export default DialogF;
