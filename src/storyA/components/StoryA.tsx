import * as React from "react";
import "../static/storyA.css";
import DialogG from "./DialogG";
import DialogH from "./DialogH";
import DialogI from "./DialogI";
import ConnectedQuestionA from "../containers/QuestionAContainer";
import Lottie from "react-lottie";
import * as storyAJson from "../static/storyA_background.json";

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
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: storyAJson
    };

    return (
      <>
        <div className="storyA-background">
          <Lottie options={defaultOptions} />
        </div>
        <DialogG isShowDialog={this.props.isShowDialogG} />
        <DialogH isShowDialog={this.props.isShowDialogH} />
        <DialogI isShowDialog={this.props.isShowDialogI} />
        <ConnectedQuestionA />
      </>
    );
  }
}

export default StoryA;
