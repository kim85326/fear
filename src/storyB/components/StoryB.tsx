import * as React from "react";
import "../static/storyB.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/storyB.wav";
import HairBallA from "./HairBallA";
import DialogJ from "./DialogJ";
import ConnectedRabbitA from "../containers/RabbitAContainer";
import ConnectedButtonD from "../containers/ButtonDContainer";
import ConnectedBoyE from "../containers/PatternFContainer";
import ConnectedPatternE from "../containers/PatternEContainer";
import Cushion from "./Cushion";
import Grass from "./Grass";
import ConnectedPatternF from "../containers/PatternFContainer";
import Lottie from "react-lottie";
import * as storyBJson from "../static/storyB_background.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: storyBJson
};

interface IStoryBProps {
  isLoading: boolean;
  isShowDialogJ: boolean;
  isShowButtonD: boolean;
}

class StoryB extends React.Component<IStoryBProps> {
  constructor(props: IStoryBProps) {
    super(props);
  }

  public render() {
    return (
      <div className="storyB">
        <div className="storyB-background">
          <Lottie options={defaultOptions} />
        </div>
        <Grass />
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <ConnectedPatternE />
        <DialogJ isShowDialog={this.props.isShowDialogJ} />
        <Cushion />
        <ConnectedRabbitA />
        <HairBallA />
        <ConnectedBoyE />
        <ConnectedPatternF />
        <ConnectedButtonD />
      </div>
    );
  }
}

export default StoryB;
