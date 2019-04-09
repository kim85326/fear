import * as React from "react";
import "../static/ending.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/ending.wav";
import ConnectedButtonJ from "../containers/ButtonJContainer";
import ConnectedButtonK from "../containers/ButtonKContainer";
import Lottie from "react-lottie";
import * as endingBackground1Json from "../static/ending_background_1.json";
import * as endingContent1Json from "../static/ending_content_1.json";
import * as endingText1Json from "../static/ending_text_1.json";
import * as endingBackground2Json from "../static/ending_background_2.json";
import * as endingContent2Json from "../static/ending_content_2.json";
import * as endingText2Json from "../static/ending_text_2.json";
import * as endingBackground3Json from "../static/ending_background_3.json";
import * as endingContent3Json from "../static/ending_content_3.json";
import * as endingText3Json from "../static/ending_text_3.json";

const endingBackground1Options = {
  loop: true,
  autoplay: true,
  animationData: endingBackground1Json
};

const endingContent1Options = {
  loop: true,
  autoplay: true,
  animationData: endingContent1Json
};

const endingText1Options = {
  loop: true,
  autoplay: true,
  animationData: endingText1Json
};

const endingBackground2Options = {
  loop: true,
  autoplay: true,
  animationData: endingBackground2Json
};

const endingContent2Options = {
  loop: true,
  autoplay: true,
  animationData: endingContent2Json
};

const endingText2Options = {
  loop: true,
  autoplay: true,
  animationData: endingText2Json
};

const endingBackground3Options = {
  loop: true,
  autoplay: true,
  animationData: endingBackground3Json
};

const endingContent3Options = {
  loop: true,
  autoplay: true,
  animationData: endingContent3Json
};

const endingText3Options = {
  loop: true,
  autoplay: true,
  animationData: endingText3Json
};

interface IEndingProps {
  finalAnswer: string;
}

class Ending extends React.Component<IEndingProps> {
  constructor(props: IEndingProps) {
    super(props);
  }

  public render() {
    return (
      <div className="ending">
        {this.getBackground()}
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        {this.getEndingContent()}
        <ConnectedButtonJ />
        <ConnectedButtonK />
      </div>
    );
  }

  private getBackground() {
    if (this.props.finalAnswer === "white") {
      return (
        <div className="ending-background">
          <Lottie options={endingBackground1Options} />
        </div>
      );
    } else if (this.props.finalAnswer === "red") {
      return (
        <div className="ending-background">
          <Lottie options={endingBackground2Options} />
        </div>
      );
    } else {
      return (
        <div className="ending-background">
          <Lottie options={endingBackground3Options} />
        </div>
      );
    }
  }

  private getEndingContent() {
    if (this.props.finalAnswer === "white") {
      return (
        <>
          <div className="ending-content">
            <Lottie options={endingContent1Options} />
          </div>
          <div className="ending-text">
            <Lottie options={endingText1Options} />
          </div>
        </>
      );
    } else if (this.props.finalAnswer === "red") {
      return (
        <>
          <div className="ending-content">
            <Lottie options={endingContent2Options} />
          </div>
          <div className="ending-text">
            <Lottie options={endingText2Options} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="ending-content">
            <Lottie options={endingContent3Options} />
          </div>
          <div className="ending-text">
            <Lottie options={endingText3Options} />
          </div>
        </>
      );
    }
  }
}

export default Ending;
