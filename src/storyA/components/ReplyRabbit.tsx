import * as React from "react";

interface IReplyRabbitProps {
  isShowReplyRabbit: boolean;
  handleClick: () => void;
}

interface IReplyRabbitState {
  backgroundColor: string;
}

class ReplyRabbit extends React.Component<
  IReplyRabbitProps,
  IReplyRabbitState
> {
  constructor(props: IReplyRabbitProps) {
    super(props);
    this.state = {
      backgroundColor: "#F17752"
    };
  }

  public render() {
    return (
      <svg
        className={`reply-rabbit ${this.props.isShowReplyRabbit ? "show" : ""}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 344.9 295.2"
      >
        <a
          className="reply-rabbit-button"
          onClick={this.props.handleClick}
          onMouseEnter={this.changeBackgroundColor.bind(this, "#5D87C0")}
          onMouseLeave={this.changeBackgroundColor.bind(this, "#F17752")}
        >
          <rect x="104" y="195" width="138" height="47" fill="#FCF8ED" />
          <g>
            <g>
              <path
                fill={this.state.backgroundColor}
                d="M140.2,204.5v26.8h-4.6v-1.6h-16.4v1.6h-4.4v-26.8H140.2z M135.6,225.8v-17h-16.4v17H135.6z M133.6,211.7
			v11.5h-12.3v-11.5H133.6z M129.3,215.3h-4.1v4.1h4.1V215.3z"
              />
              <path
                fill={this.state.backgroundColor}
                d="M168.4,225.1c-0.8,1.1-1.8,2-3,2.8c1.5,0.2,3.1,0.4,4.8,0.5c-0.7,0.7-1.5,2-1.9,2.9c-2.7-0.3-5.2-0.7-7.4-1.4
			c-2.7,0.8-5.8,1.2-9.1,1.5c-0.3-0.8-0.9-2-1.4-2.7c2.2-0.1,4.3-0.3,6.2-0.6c-0.4-0.2-0.8-0.5-1.3-0.7c-0.7,0.3-1.5,0.5-2.2,0.8
			c-0.4-0.6-1.4-1.8-2-2.3c0.6-0.1,1.1-0.3,1.7-0.5c-0.4-0.4-0.8-0.9-1.2-1.4l2.7-1v-3.5c-0.3,0.3-0.5,0.5-0.8,0.7
			c-0.3-0.3-0.8-0.8-1.4-1.3c-0.6,0.9-1.4,1.9-2.2,2.8v9.6h-3.7V225c-0.5,0.3-1,0.7-1.5,1c-0.5-0.8-1.6-2-2.2-2.7
			c2.4-1.3,4.9-3.7,6-5.7l3.5,1.2c-0.5-0.4-1-0.9-1.4-1.1c1.6-1.1,3-2.9,3.9-4.7h-6.4l3.4,1.1c-1.6,2.2-4.1,4.4-6.5,5.7
			c-0.6-0.8-1.7-2-2.4-2.6c2-1,4.2-2.7,5.2-4.3H145v-5.5h6.2v-0.6h-7.6V204h25.7v2.8h-7.8v0.6h6.9v5.5h-12.2l2,0.5l-0.2,0.5h11.2
			v2.6h-12.7c-0.1,0.2-0.3,0.4-0.4,0.6h11.8v6.2h-6.7c-0.2,0.2-0.4,0.4-0.6,0.6h4.7l0.6-0.1L168.4,225.1z M148.9,210.7h2.4V210h-2.4
			V210.7z M154.9,223.5c0.2,0.2,0.5,0.5,0.8,0.7c0.4-0.2,0.8-0.5,1.2-0.7H154.9z M155.1,207.5h2.7v-0.6h-2.7V207.5z M157.8,210.7
			V210h-2.7v0.7H157.8z M157.8,219.6h6.7V219h-6.7V219.6z M157.8,221.7h6.7v-0.6h-6.7V221.7z M159.3,226.3c0.6,0.2,1.2,0.4,1.8,0.6
			c0.5-0.2,1-0.4,1.4-0.6H159.3z M161.7,209.9v0.7h2.9v-0.7H161.7z"
              />
              <path
                fill={this.state.backgroundColor}
                d="M196.3,225.1c0.9,0.6,2.4,1,3.4,1.3c-0.5,3.8-1.6,4.9-4.7,4.9h-4c-4.1,0-5.1-1.2-5.1-4.8v-2.8
			c-1.9,3.4-5.3,6.1-11.7,7.8c-0.4-1.1-1.5-2.7-2.3-3.6c5.6-1.3,8.5-3.4,10-5.9H175v-6.7l-0.6,0.5c-0.6-1-2-2.5-2.9-3.1
			c4.1-2.5,6.8-6,8.2-9.1l4.5,0.8c-0.2,0.3-0.4,0.7-0.6,1.1h5.1l0.7-0.2l3,2c-0.7,1.2-1.7,2.6-2.7,3.9h7.7v10.9h-2.9
			c1,0.9,2.1,1.9,2.7,2.6L196.3,225.1z M183.3,218.2c0.2-1.1,0.3-2.3,0.4-3.5h-4.6v3.5H183.3z M181.3,208.9
			c-0.5,0.7-1.1,1.4-1.7,2.1h5.1c0.5-0.7,1-1.4,1.5-2.1H181.3z M192.9,214.7h-4.7c-0.1,1.2-0.3,2.4-0.5,3.5h5.2V214.7z M194.6,227.5
			c0.9,0,1.1-0.3,1.3-2l-1.8,1.6c-0.7-1-2.2-2.6-3.4-3.7l1.8-1.5h-2.4v4.4c0,1,0.2,1.1,1.4,1.1L194.6,227.5L194.6,227.5z"
              />
              <path
                fill={this.state.backgroundColor}
                d="M225.5,225.1c0.9,0.6,2.4,1,3.4,1.3c-0.5,3.8-1.6,4.9-4.7,4.9h-4.1c-4.1,0-5.1-1.2-5.1-4.8v-2.8
			c-1.9,3.4-5.3,6.1-11.7,7.8c-0.4-1.1-1.5-2.7-2.3-3.6c5.6-1.3,8.5-3.4,10-5.9h-6.9v-6.7l-0.6,0.5c-0.6-1-2-2.5-2.9-3.1
			c4.1-2.5,6.8-6,8.2-9.1l4.5,0.8c-0.2,0.3-0.4,0.7-0.6,1.1h5.1l0.7-0.2l3,2c-0.7,1.2-1.7,2.6-2.7,3.9h7.7v10.9h-2.9
			c1,0.9,2.1,1.9,2.7,2.6L225.5,225.1z M212.4,218.2c0.2-1.1,0.3-2.3,0.4-3.5h-4.6v3.5H212.4z M210.4,208.9
			c-0.5,0.7-1.1,1.4-1.7,2.1h5.1c0.5-0.7,1-1.4,1.5-2.1H210.4z M222,214.7h-4.7c-0.1,1.2-0.3,2.4-0.5,3.5h5.2V214.7z M223.8,227.5
			c0.9,0,1.1-0.3,1.3-2l-1.8,1.6c-0.7-1-2.2-2.6-3.4-3.7l1.8-1.5h-2.4v4.4c0,1,0.2,1.1,1.4,1.1L223.8,227.5L223.8,227.5z"
              />
            </g>
          </g>
        </a>
        <circle
          className="dot"
          fill={this.state.backgroundColor}
          cx="118.6"
          cy="250"
          r="5.6"
        />
        <circle
          className="dot"
          fill={this.state.backgroundColor}
          cx="144"
          cy="250"
          r="5.6"
        />
        <circle
          className="dot"
          fill={this.state.backgroundColor}
          cx="169.5"
          cy="250"
          r="5.6"
        />
        <circle
          className="dot"
          fill={this.state.backgroundColor}
          cx="194.9"
          cy="250"
          r="5.6"
        />
        <circle
          className="dot"
          fill={this.state.backgroundColor}
          cx="220.3"
          cy="250"
          r="5.6"
        />
      </svg>
    );
  }

  private changeBackgroundColor(color: string) {
    this.setState({ backgroundColor: color });
  }
}

export default ReplyRabbit;
