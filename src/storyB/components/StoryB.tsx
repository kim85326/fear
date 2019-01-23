import * as React from "react";
import "../static/storyB.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/storyB.wav";
import PatternF from "./PatternF";
import HairBallA from "./HairBallA";
import DialogJ from "./DialogJ";
import ConnectedRabbitA from "../containers/RabbitAContainer";
import ConnectedButtonD from "../containers/ButtonDContainer";
import ConnectedBoyE from "../containers/BoyEContainer";
import ConnectedPatternE from "../containers/PatternEContainer";
import Cushion from "./Cushion";

interface IStoryBProps {
  isLoading: boolean;
  isShowDialogJ: boolean;
  isShowPatternF: boolean;
  isShowButtonD: boolean;
}

class StoryB extends React.Component<IStoryBProps> {
  constructor(props: IStoryBProps) {
    super(props);
  }

  public render() {
    return (
      <div className="storyB">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <ConnectedPatternE />
        <DialogJ isShowDialog={this.props.isShowDialogJ} />
        <Cushion />
        <ConnectedRabbitA />
        <HairBallA />
        <ConnectedBoyE />
        <PatternF isShowPattern={this.props.isShowPatternF} />
        <ConnectedButtonD />
      </div>
    );
  }
}

export default StoryB;
