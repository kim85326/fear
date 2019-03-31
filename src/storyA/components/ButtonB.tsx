import * as React from "react";
import ButtonBText from "./ButtonBText";

interface IButtonBProps {
  isShowButton: boolean;
  handleClick: () => void;
}

interface IButtonBState {
  isShowButton: boolean;
  isShowingButtonBackground: boolean;
  isShowButtonText: boolean;
  backgroundColor: string;
}

class ButtonB extends React.Component<IButtonBProps, IButtonBState> {
  constructor(props: IButtonBProps) {
    super(props);

    this.state = {
      isShowButton: false,
      isShowingButtonBackground: false,
      isShowButtonText: false,
      backgroundColor: "#E77452"
    };
  }

  public componentWillReceiveProps(nextProps: IButtonBProps) {
    // 當 props 改變，且顯示按鈕時
    if (nextProps.isShowButton && !this.props.isShowButton) {
      // 顯示按鈕背景
      this.showButtonBackground();

      // 1 秒後顯示按鈕的文字
      setTimeout(() => {
        this.setState({ isShowButtonText: true });
      }, 1000);
    }

    // 當 props 改變，且不顯示按鈕時
    if (!nextProps.isShowButton && this.props.isShowButton) {
      // 不顯示按鈕、按鈕文字
      this.setState({
        isShowButton: false,
        isShowButtonText: false
      });
    }
  }

  public render() {
    return (
      <a
        className={`buttonB ${this.state.isShowButton ? "show" : ""}`}
        onClick={this.props.handleClick}
        onMouseEnter={this.changeBackgroundColor.bind(this, "#8A8077")}
        onMouseLeave={this.changeBackgroundColor.bind(this, "#E77452")}
      >
        <ButtonBText isShowButtonText={this.state.isShowButtonText} />
        <svg
          className={`
            buttonB-background 
            ${this.state.isShowingButtonBackground ? "isShowing" : ""}
          `}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 433.8 139.9"
        >
          <path
            fill={this.state.backgroundColor}
            d="M422.006,139.383H11c-6.075,0-11-4.925-11-11V11C0,4.925,4.925,0,11,0h411.006
	c6.074,0,11,4.925,11,11v117.383C433.006,134.458,428.081,139.383,422.006,139.383"
          />
        </svg>
      </a>
    );
  }

  private showButtonBackground() {
    this.setState({
      isShowButton: true,
      isShowingButtonBackground: true
    });
    setTimeout(() => {
      this.setState({ isShowingButtonBackground: false });
    }, 1000);
  }

  private changeBackgroundColor(color: string) {
    this.setState({ backgroundColor: color });
  }
}

export default ButtonB;
