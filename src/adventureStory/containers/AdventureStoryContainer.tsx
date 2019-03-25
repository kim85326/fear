import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import AdventureStory from "../components/AdventureStory";
import {
  closeAdventureStoryAction,
  setIsAdventureStoryLoadingAction,
  closingAdventureStoryAction,
  moveAdventureStoryLeftAction,
  moveAdventureStoryRightAction,
  setIsShowEasonThinkAction
} from "../AdventureStoryActions";
import adventureStoryImage from "../static/adventureStory.png";

interface IAdventureStoryContainerProps extends IAdventureStoryStateProps {
  dispatch: Dispatch;
}

interface IAdventureStoryStateProps {
  isShow: boolean;
  isHiding: boolean;
  isLoading: boolean;
  imgY: number;
}

const mapStateToProps = (state: IAppState): IAdventureStoryStateProps => ({
  isShow: state.adventureStoryState.isShow,
  isHiding: state.adventureStoryState.isHiding,
  isLoading: state.adventureStoryState.isLoading,
  imgY: state.adventureStoryState.imgY
});

class AdventureStoryContainer extends React.Component<
  IAdventureStoryContainerProps
> {
  private image = new Image();

  constructor(props: IAdventureStoryContainerProps) {
    super(props);
    this.closeAdventureStory = this.closeAdventureStory.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  public componentDidMount() {
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.image.src = adventureStoryImage;
    this.image.onload = this.handleImageLoaded;
  }

  public componentWillReceiveProps(nextProps: IAdventureStoryContainerProps) {
    if (nextProps.isHiding && !this.props.isHiding) {
      setTimeout(() => {
        this.props.dispatch(closeAdventureStoryAction());
      }, 1000);
    }

    const imgWrapper = document.querySelector(".adventureStory-img-wrapper");
    if (imgWrapper) {
      const width = imgWrapper.getBoundingClientRect().width;
      if (
        nextProps.imgY !== this.props.imgY &&
        nextProps.imgY === width - 3000
      ) {
        this.props.dispatch(setIsShowEasonThinkAction(true));
      }
    }
  }

  public render() {
    if (!this.props.isLoading && this.props.isShow) {
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

  private handleImageLoaded() {
    this.props.dispatch(setIsAdventureStoryLoadingAction(false));
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
    const width = imgWrapper!.getBoundingClientRect().width;
    if (this.props.imgY > width - 3000) {
      this.props.dispatch(moveAdventureStoryRightAction());
    }
  }
}

const ConnectedAdventureStory = connect(mapStateToProps)(
  AdventureStoryContainer
);

export default ConnectedAdventureStory;
