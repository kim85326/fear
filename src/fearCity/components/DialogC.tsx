import * as React from "react";
import DialogCText from "./DialogCText";

interface IDialogCProps {
  isShowDialog: boolean;
}

interface IDialogCState {
  isShowDialog: boolean;
  isShowingDialogBackground: boolean;
  isHidingDialogBackground: boolean;
  isShowDialogText: boolean;
}

class DialogC extends React.Component<IDialogCProps, IDialogCState> {
  constructor(props: IDialogCProps) {
    super(props);

    this.state = {
      isShowDialog: false,
      isShowingDialogBackground: false,
      isHidingDialogBackground: false,
      isShowDialogText: false
    };
  }

  public componentWillReceiveProps(nextProps: IDialogCProps) {
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
      <div className={`dialogC ${this.state.isShowDialog ? "show" : ""}`}>
        <DialogCText isShowDialogText={this.state.isShowDialogText} />
        <svg
          className={`dialogC-background
            ${this.state.isShowingDialogBackground ? "isShowing" : ""}
            ${this.state.isHidingDialogBackground ? "isHiding" : ""}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 226.765 172.104"
        >
          <path
            style={{ fill: "#E7E3E3" }}
            d="M113.382,0c62.619,0,113.383,38.526,113.383,86.052c0,21.906-10.805,41.888-28.564,57.079
            l21.436,28.973l-38.35-17.134c-18.93,10.76-42.436,17.134-67.904,17.134C50.763,172.104,0,133.577,0,86.052S50.763,0,113.382,0z"
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

export default DialogC;
