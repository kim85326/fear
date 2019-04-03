import * as React from "react";
import { Link } from "react-router-dom";
import ButtonDText from "./ButtonEText";

interface IButtonDProps {
  isShowButton: boolean;
}

interface IButtonDState {
  isShowButton: boolean;
  isShowingButtonBackground: boolean;
  isShowButtonText: boolean;
}

class ButtonD extends React.Component<IButtonDProps, IButtonDState> {
  constructor(props: IButtonDProps) {
    super(props);

    this.state = {
      isShowButton: false,
      isShowingButtonBackground: false,
      isShowButtonText: false
    };
  }

  public componentWillReceiveProps(nextProps: IButtonDProps) {
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
      <Link
        to="/storyE"
        className={`buttonE ${this.state.isShowButton ? "show" : ""}`}
      >
        <ButtonDText isShowButtonText={this.state.isShowButtonText} />
        <svg
          className={`
            buttonD-background 
            ${this.state.isShowingButtonBackground ? "isShowing" : ""}
          `}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 244.741 88.204"
        >
          <path
            fill="#79A246"
            d="M49.889,48.143c0,0-8.439-2.619-28.111,3.625C10.576,55.325,4.35,62.354,7.406,68.995
	c2.668,5.795,12.473,6.135,22.51-0.389C40.686,61.606,49.889,48.143,49.889,48.143z"
          />
          <path
            fill="#79A246"
            d="M51.982,37.872c0,0-4.227-7.762-22.684-16.998c-10.51-5.258-19.875-4.561-22.313,2.332
	c-2.127,6.016,4.666,13.096,16.41,15.414C35.996,41.108,51.982,37.872,51.982,37.872z"
          />
          <path
            fill="#79A246"
            d="M47.305,44.056c0,0-6.57-5.908-27.051-8.463C8.592,34.14-0.004,37.919-0.004,45.229
	c0,6.381,8.764,10.791,20.609,9.063C33.314,52.436,47.305,44.056,47.305,44.056z"
          />
          <path
            fill="#E77452"
            d="M40.76,49.864c-8.514-8.095-11.918-19.781-3.684-32.486c11.631-17.947,43.41-17.377,63.75-17.377
	c54.394,0,143.912,16.912,143.912,47.955c0,28.053-93.072,43.789-160.23,39.592c-20.887-1.305-39.346-6.662-45.799-15.197
	C30.066,60.918,40.76,49.864,40.76,49.864z"
          />
        </svg>
      </Link>
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
}

export default ButtonD;
