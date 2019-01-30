import * as React from "react";
import DialogJText from "./DialogJText";

interface IDialogJProps {
  isShowDialog: boolean;
}

interface IDialogJState {
  isShowDialog: boolean;
  isShowingDialogBackground: boolean;
  isHidingDialogBackground: boolean;
  isShowDialogText: boolean;
}

class DialogJ extends React.Component<IDialogJProps, IDialogJState> {
  constructor(props: IDialogJProps) {
    super(props);

    this.state = {
      isShowDialog: false,
      isShowingDialogBackground: false,
      isHidingDialogBackground: false,
      isShowDialogText: false
    };
  }

  public componentWillReceiveProps(nextProps: IDialogJProps) {
    // 當 props 改變，且顯示對話框時
    if (nextProps.isShowDialog && !this.props.isShowDialog) {
      // 顯示對話框背景
      this.showDialogBackground();

      // 0.5 秒後顯示對話框的文字
      setTimeout(() => {
        if (nextProps.isShowDialog) {
          this.setState({ isShowDialogText: true });
        }
      }, 500);
    }

    // 當 props 改變，且不顯示對話框時
    if (!nextProps.isShowDialog && this.props.isShowDialog) {
      // 不顯示對話框背景
      this.hideDialogBackground();

      // 0.4 秒後不顯示對話框的文字
      setTimeout(() => {
        if (!nextProps.isShowDialog) {
          this.setState({ isShowDialogText: false });
        }
      }, 400);
    }
  }

  public render() {
    return (
      <div className={`dialogJ ${this.state.isShowDialog ? "show" : ""}`}>
        <DialogJText isShowDialogText={this.state.isShowDialogText} />
        <svg
          className={`dialogJ-background
            ${this.state.isShowingDialogBackground ? "isShowing" : ""}
            ${this.state.isHidingDialogBackground ? "isHiding" : ""}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 287.538 218.229"
        >
          <path
            fill="#FCF8ED"
            d="M143.769,0c79.401,0,143.769,48.852,143.769,109.114c0,27.777-13.699,53.114-36.219,72.376
	l27.178,36.738l-48.626-21.727c-24.001,13.644-53.808,21.727-86.102,21.727C64.367,218.229,0,169.376,0,109.114
	C0,48.852,64.367,0,143.769,0z"
          />
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
      if (this.state.isShowingDialogBackground === true) {
        this.setState({ isShowingDialogBackground: false });
      }
    }, 1000);
  }

  private hideDialogBackground() {
    this.setState({ isHidingDialogBackground: true });
    setTimeout(() => {
      if (this.state.isHidingDialogBackground === true) {
        this.setState({
          isHidingDialogBackground: false
        });
      }
      if (!this.props.isShowDialog) {
        this.setState({
          isShowDialog: false
        });
      }
    }, 1000);
  }
}

export default DialogJ;
