import * as React from "react";
import "../static/ending.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/ending.wav";
import ConnectedButtonJ from "../containers/ButtonJContainer";
import ConnectedButtonK from "../containers/ButtonKContainer";
import endingContentSrc from "../static/ending_1.png";

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
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <div className="ending-content">{this.getEndingContent()}</div>
        <ConnectedButtonJ />
        <ConnectedButtonK />
      </div>
    );
  }

  private getEndingContent() {
    if (this.props.finalAnswer === "white") {
      return <img src={endingContentSrc} alt="" />;
    } else if (this.props.finalAnswer === "red") {
      return <img src={endingContentSrc} alt="" />;
    } else {
      return <img src={endingContentSrc} alt="" />;
    }
  }
}

export default Ending;
