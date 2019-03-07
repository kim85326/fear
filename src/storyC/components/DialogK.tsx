import * as React from "react";
import DialogKText from "./DialogKText";

interface IDialogKProps {
  isShowDialog: boolean;
}

interface IDialogKState {
  isShowDialog: boolean;
  isShowingDialogBackground: boolean;
  isHidingDialogBackground: boolean;
  isShowDialogText: boolean;
}

class DialogK extends React.Component<IDialogKProps, IDialogKState> {
  constructor(props: IDialogKProps) {
    super(props);

    this.state = {
      isShowDialog: false,
      isShowingDialogBackground: false,
      isHidingDialogBackground: false,
      isShowDialogText: false
    };
  }

  public componentWillReceiveProps(nextProps: IDialogKProps) {
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
      <div className={`dialogK ${this.state.isShowDialog ? "show" : ""}`}>
        <DialogKText isShowDialogText={this.state.isShowDialogText} />
        <svg
          className={`dialogK-background
            ${this.state.isShowingDialogBackground ? "isShowing" : ""}
            ${this.state.isHidingDialogBackground ? "isHiding" : ""}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 287.537 218.229"
        >
          <path
            fill="#FCF8ED"
            d="M143.77,0C64.369,0,0,48.853,0,109.114c0,27.777,13.699,53.115,36.221,72.377l-27.18,36.738
	l48.627-21.727c24.002,13.643,53.809,21.727,86.102,21.727c79.4,0,143.768-48.854,143.768-109.115S223.17,0,143.77,0z"
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

export default DialogK;
