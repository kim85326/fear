import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import AdventureStory from "../components/AdventureStory";
import {
  closeAdventureStoryAction,
  closingAdventureStoryAction,
  moveAdventureStoryLeftAction,
  moveAdventureStoryRightAction,
  setIsShowEasonThinkAction
} from "../AdventureStoryActions";

interface IAdventureStoryContainerProps extends IAdventureStoryStateProps {
  dispatch: Dispatch;
}

interface IAdventureStoryStateProps {
  isShow: boolean;
  isHiding: boolean;
  imgY: number;
}

const mapStateToProps = (state: IAppState): IAdventureStoryStateProps => ({
  isShow: state.adventureStoryState.isShow,
  isHiding: state.adventureStoryState.isHiding,
  imgY: state.adventureStoryState.imgY
});

class AdventureStoryContainer extends React.Component<
  IAdventureStoryContainerProps
> {
  constructor(props: IAdventureStoryContainerProps) {
    super(props);
    this.closeAdventureStory = this.closeAdventureStory.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  public componentWillReceiveProps(nextProps: IAdventureStoryContainerProps) {
    if (nextProps.isHiding && !this.props.isHiding) {
      setTimeout(() => {
        this.props.dispatch(closeAdventureStoryAction());
      }, 1000);
    }

    const imgWrapper = document.querySelector(".adventureStory-img-wrapper");
    const img = document.querySelector(".adventureStory-img");
    if (imgWrapper && img) {
      const wrapperWidth = imgWrapper.getBoundingClientRect().width;
      const imgWidth = img.getBoundingClientRect().width;
      if (
        nextProps.imgY !== this.props.imgY &&
        nextProps.imgY <= wrapperWidth - imgWidth
      ) {
        this.props.dispatch(setIsShowEasonThinkAction(true));
      }
    }
  }

  public render() {
    if (this.props.isShow) {
      return (
        <AdventureStory
          closeAdventureStory={this.closeAdventureStory}
          moveLeft={this.moveLeft}
          moveRight={this.moveRight}
          isHiding={this.props.isHiding}
          imgY={this.props.imgY}
        />
      );
    }
    return null;
  }

  private closeAdventureStory() {
    this.props.dispatch(closingAdventureStoryAction());
  }

  private moveLeft() {
    if (this.props.imgY < 0) {
      this.props.dispatch(moveAdventureStoryLeftAction());
    }
  }

  private moveRight() {
    const imgWrapper = document.querySelector(".adventureStory-img-wrapper");
    const img = document.querySelector(".adventureStory-img");
    const wrapperWidth = imgWrapper!.getBoundingClientRect().width;
    const imgWidth = img!.getBoundingClientRect().width;
    if (this.props.imgY > wrapperWidth - imgWidth) {
      this.props.dispatch(moveAdventureStoryRightAction());
    }
  }
}

const ConnectedAdventureStory = connect(mapStateToProps)(
  AdventureStoryContainer
);

export default ConnectedAdventureStory;
