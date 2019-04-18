import * as React from "react";
import "../static/ending.css";
import ConnectedButtonJ from "../containers/ButtonJContainer";
import ConnectedButtonK from "../containers/ButtonKContainer";
import Lottie from "react-lottie";
import * as hopeBackgroundJson from "../static/hope_background.json";
import * as hopeContentJson from "../static/hope_content.json";
import * as hopeTextJson from "../static/hope_text.json";
import * as friendBackgroundJson from "../static/friend_background.json";
import * as friendContentJson from "../static/friend_content.json";
import * as friendTextJson from "../static/friend_text.json";
import * as blueBackgroundJson from "../static/blue_background.json";
import * as blueContentJson from "../static/blue_content.json";
import * as blueTextJson from "../static/blue_text.json";

const getAnimationOptions = (src: any) => ({
  loop: true,
  autoplay: true,
  animationData: src
});

interface IEndingProps {
  finalAnswer: string;
}

class Ending extends React.Component<IEndingProps> {
  constructor(props: IEndingProps) {
    super(props);
  }

  public render() {
    return (
      <>
        {this.getBackground()}
        {this.getEndingContent()}
        <ConnectedButtonJ />
        <ConnectedButtonK />
      </>
    );
  }

  private getBackground() {
    if (this.props.finalAnswer === "hope") {
      return (
        <div className="ending-background">
          <Lottie options={getAnimationOptions(hopeBackgroundJson)} />
        </div>
      );
    } else if (this.props.finalAnswer === "friend") {
      return (
        <div className="ending-background">
          <Lottie options={getAnimationOptions(friendBackgroundJson)} />
        </div>
      );
    } else {
      return (
        <div className="ending-background">
          <Lottie options={getAnimationOptions(blueBackgroundJson)} />
        </div>
      );
    }
  }

  private getEndingContent() {
    if (this.props.finalAnswer === "hope") {
      return (
        <>
          <div className="ending-content">
            <Lottie options={getAnimationOptions(hopeContentJson)} />
          </div>
          <div className="ending-text">
            <Lottie options={getAnimationOptions(hopeTextJson)} />
          </div>
        </>
      );
    } else if (this.props.finalAnswer === "friend") {
      return (
        <>
          <div className="ending-content">
            <Lottie options={getAnimationOptions(friendContentJson)} />
          </div>
          <div className="ending-text">
            <Lottie options={getAnimationOptions(friendTextJson)} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="ending-content">
            <Lottie options={getAnimationOptions(blueContentJson)} />
          </div>
          <div className="ending-text">
            <Lottie options={getAnimationOptions(blueTextJson)} />
          </div>
        </>
      );
    }
  }
}

export default Ending;
