import * as React from "react";
import ButtonKText from "./ButtonKText";

interface IButtonKProps {
  isShowButton: boolean;
}

interface IButtonKState {
  isShowButton: boolean;
  isShowingButtonBackground: boolean;
  isShowButtonText: boolean;
}

class ButtonK extends React.Component<IButtonKProps, IButtonKState> {
  constructor(props: IButtonKProps) {
    super(props);

    this.state = {
      isShowButton: false,
      isShowingButtonBackground: false,
      isShowButtonText: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public componentWillReceiveProps(nextProps: IButtonKProps) {
    // 當 props 改變，且顯示按鈕時
    if (nextProps.isShowButton && !this.props.isShowButton) {
      // 顯示按鈕背景
      this.showButtonBackground();

      // 0.5 秒後顯示按鈕的文字
      setTimeout(() => {
        this.setState({ isShowButtonText: true });
      }, 500);
    }
  }

  public render() {
    return (
      <a
        onClick={this.handleClick}
        className={`buttonK ${this.state.isShowButton ? "show" : ""}`}
      >
        <ButtonKText isShowButtonText={this.state.isShowButtonText} />
        <svg
          className={`
            buttonK-background 
            ${this.state.isShowingButtonBackground ? "isShowing" : ""}
          `}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 245.423 88.466"
        >
          <g>
            <path
              fill="#ADC56D"
              d="M195.231,42.728c0,0,8.422,2.754,28.242-3.21c11.285-3.396,17.635-10.349,14.67-17.054
	c-2.587-5.852-12.413-6.341-22.575,0.048C204.664,29.367,195.231,42.728,195.231,42.728z"
            />
            <path
              fill="#718B6D"
              d="M193.292,46.837c0,0,4.237,7.783,22.747,17.045c10.538,5.273,19.929,4.573,22.373-2.339
	c2.133-6.032-4.679-13.131-16.454-15.457C209.322,43.591,193.292,46.837,193.292,46.837z"
            />
            <path
              fill="#79A246"
              d="M197.982,41.274c0,0,6.589,5.925,27.128,8.485c11.693,1.458,20.313-2.333,20.313-9.664
	c0-6.398-8.789-10.82-20.667-9.087C212.011,32.869,197.982,41.274,197.982,41.274z"
            />
            <path
              fill="#E77452"
              d="M204.545,38.462c8.538,8.117,11.951,19.835,3.694,32.576c-11.664,17.997-43.531,17.426-63.929,17.426
	C89.766,88.464,0,71.504,0,40.375C0,12.245,93.332-3.536,160.675,0.673c20.945,1.309,39.456,6.681,45.928,15.239
	C215.27,27.375,204.545,38.462,204.545,38.462z"
            />
          </g>
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

  private handleClick(): void {
    window.location.reload(true);
  }
}

export default ButtonK;
