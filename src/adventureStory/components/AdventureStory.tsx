import * as React from "react";
import "../static/adventureStory.css";
import CloseAdventureStoryButton from "./CloseAdventureStoryButton";
import MoveLeftButton from "./MoveLeftButton";
import MoveRightButton from "./MoveRightButton";
import ConnectedQuestionC from "../containers/QuestionBContainer";
import ConnectedEasonThink from "../containers/EasonThinkContainer";
import Lottie from "react-lottie";
import * as adventureStoryJson from "../static/adventureStory.json";
import AdventureStoryText from "./AdventureStoryText";
import AdventureStoryBackground from "./AdventureStoryBackground";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: adventureStoryJson
};

interface IAdventureStoryProps {
  isHiding: boolean;
  closeAdventureStory: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  imgY: number;
}

class AdventureStory extends React.Component<IAdventureStoryProps> {
  constructor(props: IAdventureStoryProps) {
    super(props);
  }

  public render() {
    return (
      <div className="adventureStory">
        <div className="adventureStory-img-wrapper">
          <div
            className="adventureStory-img"
            style={{ left: this.props.imgY + "px" }}
          >
            <div className="adventureStory-img-item adventureStory-background">
              <AdventureStoryBackground />
            </div>
            <div className="adventureStory-img-item adventureStory-json">
              <Lottie options={defaultOptions} />
            </div>
            <div className="adventureStory-img-item adventureStory-text">
              <AdventureStoryText />
            </div>
          </div>
        </div>
        <CloseAdventureStoryButton
          isHiding={this.props.isHiding}
          handleClick={this.props.closeAdventureStory}
        />
        <MoveLeftButton moveLeft={this.props.moveLeft} />
        <MoveRightButton moveRight={this.props.moveRight} />
        <ConnectedEasonThink />
        <ConnectedQuestionC />
      </div>
    );
  }
}

export default AdventureStory;
