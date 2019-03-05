import * as React from "react";
import "../static/ending.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/ending.wav";
import ConnectedButtonJ from "../containers/ButtonJContainer";
import ConnectedButtonK from "../containers/ButtonKContainer";
import EndingContent from "./EndingContent";

class Ending extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="ending">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <EndingContent />
        <ConnectedButtonJ />
        <ConnectedButtonK />
      </div>
    );
  }
}

export default Ending;
