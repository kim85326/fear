import * as React from "react";
import "../static/home.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/home.wav";
import sloganBackgroundSrc from "../static/slogan_background.png";
import sloganSrc from "../static/slogan.png";
import RabbitCity from "./RabbitCity";
import Mountains from "./Mountains";
import FearCity from "./FearCity";

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <img className="slogan-background" src={sloganBackgroundSrc} alt="" />
        <img className="slogan" src={sloganSrc} alt="" />
        <FearCity />
        <RabbitCity />
        <Mountains />
      </div>
    );
  }
}

export default Home;
