import * as React from "react";
import "../static/storyC.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/storyC.wav";
import PatternJ from "./PatternJ";
import HairBallB from "./HairBallB";
import HairBallC from "./HairBallC";
import HairBallD from "./HairBallD";
import HairBallE from "./HairBallE";
import DialogK from "./DialogK";
import ConnectedRabbitB from "../containers/RabbitBContainer";
import ConnectedButtonE from "../containers/ButtonEContainer";
import ConnectedPatternI from "../containers/PatternIContainer";
import ConnectedWell from "../containers/WellContainer";
import RabbitC from "./RabbitC";
import RabbitD from "./RabbitD";

interface IStoryCProps {
  isLoading: boolean;
  isShowDialogK: boolean;
  isShowPatternJ: boolean;
  isShowButtonE: boolean;
}

class StoryC extends React.Component<IStoryCProps> {
  constructor(props: IStoryCProps) {
    super(props);
  }

  public render() {
    return (
      <div className="storyC">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <ConnectedPatternI />
        <DialogK isShowDialog={this.props.isShowDialogK} />
        <ConnectedRabbitB />
        <RabbitC />
        <RabbitD />
        <HairBallB />
        <HairBallC />
        <HairBallD />
        <HairBallE />
        <PatternJ isShowPattern={this.props.isShowPatternJ} />
        <ConnectedWell />
        <ConnectedButtonE />
      </div>
    );
  }
}

export default StoryC;
