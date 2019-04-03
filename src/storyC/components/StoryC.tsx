import * as React from "react";
import "../static/storyC.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/storyC.wav";
import DialogK from "./DialogK";
import ConnectedRabbitB from "../containers/RabbitBContainer";
import ConnectedButtonE from "../containers/ButtonEContainer";
import ConnectedPatternI from "../containers/PatternIContainer";
import ConnectedPatternJ from "../containers/PatternJContainer";
import Lottie from "react-lottie";
import * as storyCJson from "../static/storyC_background.json";
import * as grassJson from "../static/storyC_grass.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: storyCJson
};

const grassOptions = {
  loop: true,
  autoplay: true,
  animationData: grassJson
};

interface IStoryCProps {
  isShowDialogK: boolean;
  isShowButtonE: boolean;
}

class StoryC extends React.Component<IStoryCProps> {
  constructor(props: IStoryCProps) {
    super(props);
  }

  public render() {
    return (
      <div className="storyC">
        <div className="storyC-background">
          <Lottie options={defaultOptions} />
        </div>
        <div className="storyC-grass">
          <Lottie options={grassOptions} />
        </div>
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <ConnectedPatternI />
        <DialogK isShowDialog={this.props.isShowDialogK} />
        <ConnectedRabbitB />
        <ConnectedPatternJ />
        <ConnectedButtonE />
      </div>
    );
  }
}

export default StoryC;
