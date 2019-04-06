import * as React from "react";
import "../static/ending.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/ending.wav";
import ConnectedButtonJ from "../containers/ButtonJContainer";
import ConnectedButtonK from "../containers/ButtonKContainer";
import Lottie from "react-lottie";
import * as endingBackgroundJson from "../static/ending_background.json";
import * as endingContentWhiteJson from "../static/ending_content_white.json";
import * as endingTextWhiteJson from "../static/ending_text_white.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: endingBackgroundJson
};

const endingContentWhiteOptions = {
  loop: true,
  autoplay: true,
  animationData: endingContentWhiteJson
};

const endingTextWhiteOptions = {
  loop: true,
  autoplay: true,
  animationData: endingTextWhiteJson
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
        <div className="ending-background">
          <Lottie options={defaultOptions} />
        </div>
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        {this.getEndingContent()}
        <ConnectedButtonJ />
        <ConnectedButtonK />
      </div>
    );
  }

  private getEndingContent() {
    if (this.props.finalAnswer === "white") {
      return (
        <>
          <div className="ending-content">
            <Lottie options={endingContentWhiteOptions} />
          </div>
          <div className="ending-text">
            <Lottie options={endingTextWhiteOptions} />
          </div>
        </>
      );
    } else if (this.props.finalAnswer === "red") {
      return (
        <>
          <div className="ending-content">
            <Lottie options={endingContentWhiteOptions} />
          </div>
          <div className="ending-text">
            <Lottie options={endingTextWhiteOptions} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="ending-content">
            <Lottie options={endingContentWhiteOptions} />
          </div>
          <div className="ending-text">
            <Lottie options={endingTextWhiteOptions} />
          </div>
        </>
      );
    }
  }
}

export default Ending;
