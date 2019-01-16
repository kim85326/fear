import * as React from "react";
import DialogHText from "./DialogHText";

interface IDialogHProps {
  isShowDialog: boolean;
}

interface IDialogHState {
  isShowDialog: boolean;
  isShowingDialogBackground: boolean;
  isHidingDialogBackground: boolean;
  isShowDialogText: boolean;
}

class DialogH extends React.Component<IDialogHProps, IDialogHState> {
  constructor(props: IDialogHProps) {
    super(props);

    this.state = {
      isShowDialog: false,
      isShowingDialogBackground: false,
      isHidingDialogBackground: false,
      isShowDialogText: false
    };
  }

  public componentWillReceiveProps(nextProps: IDialogHProps) {
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
      <div className={`dialogH ${this.state.isShowDialog ? "show" : ""}`}>
        <DialogHText isShowDialogText={this.state.isShowDialogText} />
        <svg
          className={`dialogH-background
            ${this.state.isShowingDialogBackground ? "isShowing" : ""}
            ${this.state.isHidingDialogBackground ? "isHiding" : ""}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 325.99 247.411"
        >
          <path
            style={{ fill: "#E77452" }}
            d="M162.995,0c90.02,0,162.996,55.385,162.996,123.706c0,31.491-15.531,60.217-41.063,82.055
	l30.813,41.65l-55.129-24.631c-27.211,15.468-61.004,24.631-97.617,24.631C72.975,247.411,0,192.026,0,123.706
	C0,55.385,72.975,0,162.995,0"
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
      this.setState({ isShowingDialogBackground: false });
    }, 1000);
  }

  private hideDialogBackground() {
    this.setState({ isHidingDialogBackground: true });
    setTimeout(() => {
      this.setState({
        isHidingDialogBackground: false,
        isShowDialog: false
      });
    }, 800);
  }
}

export default DialogH;
