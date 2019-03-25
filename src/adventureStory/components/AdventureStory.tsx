import * as React from "react";
import "../static/adventureStory.css";
import CloseAdventureStoryButton from "./CloseAdventureStoryButton";
import MoveLeftButton from "./MoveLeftButton";
import MoveRightButton from "./MoveRightButton";
import storyImg from "../static/adventureStory.png";
import ConnectedQuestionC from "../containers/QuestionBContainer";
import ConnectedEasonThink from "../containers/EasonThinkContainer";

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
          <img
            className="adventureStory-img"
            src={storyImg}
            style={{ left: this.props.imgY + "px" }}
          />
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
