import * as React from "react";
import Lottie from "react-lottie";
import "../static/rabbitCity.css";
import * as rabbitBackgroundJson from "../static/rabbit_city_background.json";
import * as midJson from "../static/rabbit_city_mid.json";
import * as frontJson from "../static/rabbit_city_front.json";
import ConnectedDialogL from "../containers/DialogLContainer";
import ConnectedDialogM from "../containers/DialogMContainer";
import ConnectedDialogN from "../containers/DialogNContainer";
import ConnectedDialogO from "../containers/DialogOContainer";

const getAnimationOptions = (src: any) => ({
  loop: true,
  autoplay: true,
  animationData: src
});

class RabbitCity extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <>
        <div className="rabbitCity-background">
          <Lottie options={getAnimationOptions(rabbitBackgroundJson)} />
        </div>
        <div className="rabbitCity-mid">
          <Lottie options={getAnimationOptions(midJson)} />
        </div>
        <div className="rabbitCity-front">
          <Lottie options={getAnimationOptions(frontJson)} />
        </div>
        <ConnectedDialogL />
        <ConnectedDialogM />
        <ConnectedDialogN />
        <ConnectedDialogO />
      </>
    );
  }
}

export default RabbitCity;
