import * as React from "react";
import "../static/home.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/home.wav";
import logoBackgroundSrc from "../static/logo_background.png";
import logoSrc from "../static/logo.png";
import sloganSrc from "../static/slogan.png";
import RabbitCity from "./RabbitCity";
import Mountains from "./Mountains";
import FearCity from "./FearCity";
import Arrow from "./Arrow";

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
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <img className="logo-background" src={logoBackgroundSrc} alt="" />
        <img className="logo" src={logoSrc} alt="" />
        <img className="slogan" src={sloganSrc} alt="" />
        <Arrow />
        <FearCity />
        <RabbitCity />
        <Mountains />
      </div>
    );
  }
}

export default Home;
