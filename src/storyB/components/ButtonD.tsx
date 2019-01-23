import * as React from 'react';
import { Link } from 'react-router-dom';
import ButtonDText from './ButtonDText';

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
        to="/storyC"
        className={`buttonD ${this.state.isShowButton ? 'show' : ''}`}
      >
        <ButtonDText isShowButtonText={this.state.isShowButtonText} />
        <svg
          className={`
            buttonD-background 
            ${this.state.isShowingButtonBackground ? 'isShowing' : ''}
          `}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 244.741 88.204"
        >
          <g>
            <path
              fill="#79A246"
              d="M49.893,48.144c0,0-8.439-2.619-28.112,3.627C10.579,55.326,4.353,62.355,7.41,68.996
		c2.668,5.797,12.473,6.137,22.51-0.387C40.689,61.609,49.893,48.144,49.893,48.144z"
            />
            <path
              fill="#79A246"
              d="M51.985,37.873c0,0-4.226-7.762-22.684-16.997c-10.51-5.259-19.874-4.561-22.312,2.332
		c-2.127,6.016,4.666,13.095,16.409,15.414C36,41.11,51.985,37.873,51.985,37.873z"
            />
            <path
              fill="#79A246"
              d="M47.309,44.056c0,0-6.57-5.908-27.052-8.462C8.595,34.141,0,37.921,0,45.232
		c0,6.381,8.764,10.789,20.608,9.061C33.318,52.437,47.309,44.056,47.309,44.056z"
            />
            <path
              fill="#E77452"
              d="M40.764,49.865c-8.515-8.094-11.918-19.78-3.684-32.485C48.711-0.567,80.49,0.002,100.83,0.002
		c54.394,0,143.911,16.913,143.911,47.955c0,28.053-93.072,43.791-160.229,39.592c-20.887-1.305-39.346-6.66-45.8-15.195
		C30.069,60.921,40.764,49.865,40.764,49.865z"
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

export default ButtonD;
