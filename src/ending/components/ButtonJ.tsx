import * as React from "react";
import { Link } from "react-router-dom";
import ButtonJText from "./ButtonJText";

interface IButtonJProps {
  isShowButton: boolean;
}

interface IButtonJState {
  isShowButton: boolean;
  isShowingButtonBackground: boolean;
  isShowButtonText: boolean;
}

class ButtonJ extends React.Component<IButtonJProps, IButtonJState> {
  constructor(props: IButtonJProps) {
    super(props);

    this.state = {
      isShowButton: false,
      isShowingButtonBackground: false,
      isShowButtonText: false
    };
  }

  public componentWillReceiveProps(nextProps: IButtonJProps) {
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
        to="/submitFear"
        className={`buttonJ ${this.state.isShowButton ? "show" : ""}`}
      >
        <ButtonJText isShowButtonText={this.state.isShowButtonText} />
        <svg
          className={`
            buttonJ-background 
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
              fill="#718B6D"
              d="M50.158,48.529c0,0-8.432-2.726-28.231,3.303C10.652,55.263,4.325,62.238,7.312,68.933
	c2.606,5.842,12.435,6.301,22.576-0.121C40.77,61.921,50.158,48.529,50.158,48.529z"
            />
            <path
              fill="#ADC56D"
              d="M51.12,39.953c0,0-4.236-7.783-22.746-17.045c-10.539-5.273-19.929-4.573-22.373,2.339
	c-2.134,6.032,4.679,13.131,16.454,15.457C35.092,43.199,51.12,39.953,51.12,39.953z"
            />
            <path
              fill="#79A246"
              d="M47.441,44.178c0,0-6.589-5.925-27.128-8.485C8.619,34.234,0,38.025,0,45.356
	c0,6.399,8.789,10.821,20.667,9.086C33.412,52.583,47.441,44.178,47.441,44.178z"
            />
            <path
              fill="#E77452"
              d="M40.878,50.003c-8.538-8.118-11.951-19.835-3.694-32.577C48.847-0.57,80.715,0.002,101.112,0.002
	c54.543,0,144.311,16.959,144.311,48.087c0,28.131-93.332,43.912-160.675,39.703c-20.945-1.309-39.456-6.68-45.928-15.24
	C30.153,61.089,40.878,50.003,40.878,50.003z"
            />
          </g>
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

export default ButtonJ;
