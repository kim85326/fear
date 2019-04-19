import * as React from "react";
import "../static/home.css";
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

interface IHomeProps {
  showFearCity: () => void;
  showRabbitCity: () => void;
}

interface IHomeState {
  isLoading: boolean;
}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  public render() {
    return (
      <>
        <div className="home-background">
          <Lottie options={defaultOptions} />
        </div>
        <Soil />
        <Slogan />
        <FearCity showFearCity={this.props.showFearCity} />
        <RabbitCity showRabbitCity={this.props.showRabbitCity} />
        <Mountains />
        <Arrow />
      </>
    );
  }
}

export default Home;
