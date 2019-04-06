import * as React from "react";
import "../static/home.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/home.wav";
import RabbitCity from "./RabbitCity";
import Mountains from "./Mountains";
import FearCity from "./FearCity";
import Arrow from "./Arrow";
import Slogan from "./Slogan";
import Soil from "./Soil";
import Lottie from "react-lottie";
import * as homeJson from "../static/home_background.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: homeJson
};

interface IHomeState {
  isLoading: boolean;
}

class Home extends React.Component<{}, IHomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  public render() {
    return (
      <div className="home">
        <div className="home-background">
          <Lottie options={defaultOptions} />
        </div>
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <Soil />
        <Slogan />
        <FearCity />
        <RabbitCity />
        <Mountains />
        <Arrow />
      </div>
    );
  }
}

export default Home;
