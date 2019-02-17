import * as React from "react";
import "../static/storyA.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/storyA.wav";
import Grass from "./Grass";
import Boy from "./Boy";
import Rabbit from "./Rabbit";
import DialogG from "./DialogG";
import DialogH from "./DialogH";
import DialogI from "./DialogI";
import ConnectedQuestionA from "../containers/QuestionAContainer";

interface IStoryAProps {
  isLoading: boolean;
  isShowDialogG: boolean;
  isShowDialogH: boolean;
  isShowDialogI: boolean;
}

class StoryA extends React.Component<IStoryAProps> {
  constructor(props: IStoryAProps) {
    super(props);
  }

  public render() {
    return (
      <div className="storyA">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <Boy />
        <Rabbit />
        <DialogG isShowDialog={this.props.isShowDialogG} />
        <DialogH isShowDialog={this.props.isShowDialogH} />
        <DialogI isShowDialog={this.props.isShowDialogI} />
        <ConnectedQuestionA />
        <Grass />
      </div>
    );
  }
}

export default StoryA;
