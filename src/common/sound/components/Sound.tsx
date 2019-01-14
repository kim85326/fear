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
            <g id="圖層_1">
              <path
                className="st31"
                d="M0,57.9c0,0-1.4-13,13.2-17c0,0,1.3-17,26.7-30C65.2-2,79.6,3,79.6,3s6.1-4.7,14.1-2.3s30.6,2.7,31.9,43
            c0,0,4.7,1,4.3,9c-0.3,8-42.7,6.7-42.7,6.7s-4.3,4-13.3,4.3c-9,0.3-16.8-3.1-30.7-2.5C30.9,61.6,10.2,61.3,0,57.9z"
              />
              <path
                className="st78"
                d="M59.1,40.9l7.4-15.6c0.4-0.9,1.4-1.5,2.4-1.5h15c1.4,0,2.4,1.4,1.9,2.7l-4.7,13.2"
              />
              <circle className="st79" cx="55.1" cy="39" r="4.5" />
              <circle className="st79" cx="76.8" cy="39" r="4.5" />
            </g>
          ) : (
            <g id="圖層_1">
              <path
                className="st36"
                d="M0.1,57.9c0,0-1.4-13,13.2-17c0,0,1.3-17,26.7-30C65.3-2,79.6,3,79.6,3s6.1-4.7,14.1-2.3s30.6,2.7,31.9,43
            c0,0,4.7,1,4.3,9c-0.3,8-42.7,6.7-42.7,6.7s-4.3,4-13.3,4.3c-9,0.3-16.8-3.1-30.7-2.5C30.9,61.6,10.3,61.3,0.1,57.9z"
              />
              <path
                className="st82"
                d="M56.7,41.2l7.4-15.6c0.4-0.9,1.4-1.5,2.4-1.5h15c1.4,0,2.4,1.4,1.9,2.7L78.8,40"
              />
              <circle className="st83" cx="52.7" cy="39.3" r="4.5" />
              <circle className="st83" cx="74.4" cy="39.3" r="4.5" />
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
