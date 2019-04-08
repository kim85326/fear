import * as React from "react";
import "../style/sound.css";

interface ISoundProps {
  src: string;
}

interface ISoundState {
  isPlay: boolean;
}

class Sound extends React.Component<ISoundProps, ISoundState> {
  private audio = new Audio();

  constructor(props: ISoundProps) {
    super(props);
    this.state = {
      isPlay: true
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.audio.src = this.props.src;
    // this.audio.autoplay = true;
    this.audio.loop = true;
  }

  public render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 129.9 63.7"
        className={`sound ${this.state.isPlay ? "active" : ""}`}
      >
        <a onClick={this.togglePlay}>
          {this.state.isPlay ? (
            <g>
              <path
                fill="#e7e3e3"
                d="M.8,58.13C-.51,55.9-1.95,45.49,13.22,41c0,0,1.33-17,26.66-30S79.53,3,79.53,3A17.76,17.76,0,0,1,93.59.68c11,2.87,24.22,6.28,31.69,38.65a19.92,19.92,0,0,1,4.57,13.33c-.22,5.28-18.72,6.49-31.29,6.71-6.47.11-8.68-.19-11.35.8-3.28,1.22-4.35,3.15-13.34,3.48s-16-2.52-30.68-2.52C25.19,61.13,3.44,62.61.8,58.13Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#84725e"
                strokeWidth="2.22px"
                d="M56.66,41.24l7.39-15.62a2.64,2.64,0,0,1,2.38-1.5h15a2,2,0,0,1,1.92,2.71L78.74,40"
              />
              <circle
                stroke="#84725e"
                strokeWidth="2.22px"
                fill="#84725e"
                strokeMiterlimit="10"
                cx="52.63"
                cy="39.33"
                r="4.47"
              />
              <circle
                stroke="#84725e"
                strokeWidth="2.22px"
                fill="#84725e"
                strokeMiterlimit="10"
                cx="74.33"
                cy="39.33"
                r="4.47"
              />
              <path
                fill="#cec8c8"
                d="M8.39,48.42c2-3,4.24-.24,2,2C9.39,51.42,6.39,51.42,8.39,48.42Z"
              />
              <path
                fill="#cec8c8"
                d="M4.07,53.37c0-2,1.75-2,2,0,.17,1.39,0,2-1,2S4.07,54.37,4.07,53.37Z"
              />
              <path
                fill="#cec8c8"
                d="M124.81,47.74c-1.55-1.27-.43-2.62,1.26-1.55,1.19.74,1.55,1.26.92,2S125.58,48.37,124.81,47.74Z"
              />
              <path
                fill="#cec8c8"
                d="M72.69,3.3c.29.08,0,.5-.45.64-.22.06-.81,0-.63-.42C71.72,3.25,72.37,3.22,72.69,3.3Z"
              />
              <path
                fill="#cec8c8"
                d="M15.09,56c.12-.64,1.58-1.69,1.75-.19.12,1.05,0,1.51-.68,1.51A1.17,1.17,0,0,1,15.09,56Z"
              />
              <path
                fill="#cec8c8"
                d="M11.65,52.58c.07-.43,1-.87.89.12,0,.27-.17.64-.65.53S11.61,52.85,11.65,52.58Z"
              />
              <path
                fill="#cec8c8"
                d="M121.82,50.91c.07-.42,1-.87.89.12,0,.28-.17.65-.65.54S121.78,51.19,121.82,50.91Z"
              />
              <path
                fill="#cec8c8"
                d="M73.56,3.24c.18-.18.89.1.48.52-.11.11-.32.23-.56-.07S73.44,3.35,73.56,3.24Z"
              />
              <path
                fill="#cec8c8"
                d="M71.3,4.75c.13,0,.3.08.19.3a.2.2,0,0,1-.35,0C71,5,71.19,4.74,71.3,4.75Z"
              />
              <path
                fill="#cec8c8"
                d="M25.84,54.89c.07-.42,1.33-.81,1.19.18,0,.27-.17.64-.64.53A.69.69,0,0,1,25.84,54.89Z"
              />
              <path
                fill="#cec8c8"
                d="M110.7,50.3c.07-.43,1.34-.82,1.2.17,0,.27-.17.65-.65.54A.71.71,0,0,1,110.7,50.3Z"
              />
              <path
                fill="#cec8c8"
                d="M79.53,3S78,4,74.39,6.11c-2.85,1.68-3.92,2-5.55,1.93-1-.07-.12-.84,3.69-2.87C77,2.77,79.53,3,79.53,3Z"
              />
            </g>
          ) : (
            <g>
              <path
                fill="#e7e3e3"
                d="M.8,58.13C-.51,55.9-1.95,45.49,13.22,41c0,0,1.33-17,26.66-30S79.53,3,79.53,3A17.76,17.76,0,0,1,93.59.68c11,2.87,24.22,6.28,31.69,38.65a19.92,19.92,0,0,1,4.57,13.33c-.22,5.28-18.72,6.49-31.29,6.71-6.47.11-8.68-.19-11.35.8-3.28,1.22-4.35,3.15-13.34,3.48s-16-2.52-30.68-2.52C25.19,61.13,3.44,62.61.8,58.13Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#cec8c8"
                strokeWidth="2.22px"
                d="M56.66,41.24l7.39-15.62a2.64,2.64,0,0,1,2.38-1.5h15a2,2,0,0,1,1.92,2.71L78.74,40"
              />
              <circle
                stroke="#cec8c8"
                strokeWidth="2.22px"
                fill="#cec8c8"
                strokeMiterlimit="10"
                cx="52.63"
                cy="39.33"
                r="4.47"
              />
              <circle
                stroke="#cec8c8"
                strokeWidth="2.22px"
                fill="#cec8c8"
                strokeMiterlimit="10"
                cx="74.33"
                cy="39.33"
                r="4.47"
              />
              <path
                fill="#cec8c8"
                d="M8.39,48.42c2-3,4.24-.24,2,2C9.39,51.42,6.39,51.42,8.39,48.42Z"
              />
              <path
                fill="#cec8c8"
                d="M4.07,53.37c0-2,1.75-2,2,0,.17,1.39,0,2-1,2S4.07,54.37,4.07,53.37Z"
              />
              <path
                fill="#cec8c8"
                d="M124.81,47.74c-1.55-1.27-.43-2.62,1.26-1.55,1.19.74,1.55,1.26.92,2S125.58,48.37,124.81,47.74Z"
              />
              <path
                fill="#cec8c8"
                d="M72.69,3.3c.29.08,0,.5-.45.64-.22.06-.81,0-.63-.42C71.72,3.25,72.37,3.22,72.69,3.3Z"
              />
              <path
                fill="#cec8c8"
                d="M15.09,56c.12-.64,1.58-1.69,1.75-.19.12,1.05,0,1.51-.68,1.51A1.17,1.17,0,0,1,15.09,56Z"
              />
              <path
                fill="#cec8c8"
                d="M11.65,52.58c.07-.43,1-.87.89.12,0,.27-.17.64-.65.53S11.61,52.85,11.65,52.58Z"
              />
              <path
                fill="#cec8c8"
                d="M121.82,50.91c.07-.42,1-.87.89.12,0,.28-.17.65-.65.54S121.78,51.19,121.82,50.91Z"
              />
              <path
                fill="#cec8c8"
                d="M73.56,3.24c.18-.18.89.1.48.52-.11.11-.32.23-.56-.07S73.44,3.35,73.56,3.24Z"
              />
              <path
                fill="#cec8c8"
                d="M71.3,4.75c.13,0,.3.08.19.3a.2.2,0,0,1-.35,0C71,5,71.19,4.74,71.3,4.75Z"
              />
              <path
                fill="#cec8c8"
                d="M25.84,54.89c.07-.42,1.33-.81,1.19.18,0,.27-.17.64-.64.53A.69.69,0,0,1,25.84,54.89Z"
              />
              <path
                fill="#cec8c8"
                d="M110.7,50.3c.07-.43,1.34-.82,1.2.17,0,.27-.17.65-.65.54A.71.71,0,0,1,110.7,50.3Z"
              />
              <path
                fill="#cec8c8"
                d="M79.53,3S78,4,74.39,6.11c-2.85,1.68-3.92,2-5.55,1.93-1-.07-.12-.84,3.69-2.87C77,2.77,79.53,3,79.53,3Z"
              />
            </g>
          )}
        </a>
        <audio src={this.props.src} />
      </svg>
    );
  }

  private togglePlay() {
    this.setState({
      isPlay: !this.state.isPlay
    });
    this.state.isPlay ? this.audio.pause() : this.audio.play();
  }
}

export default Sound;
