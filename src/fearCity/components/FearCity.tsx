import * as React from "react";
import "../static/fearCity.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/fearCity.wav";
import ConnectedButtonA from "../containers/ButtonAContainer";
import LeftWall from "./LeftWall";
import RightWall from "./RightWall";
import PersonA from "./PersonA";
import PersonB from "./PersonB";
import PersonC from "./PersonC";
import PersonD from "./PersonD";
import DialogC from "./DialogC";

interface IFearCityProps {
  isShowDialogC: boolean;
  showDialogC: () => void;
  hideDialogC: () => void;
}

class FearCity extends React.Component<IFearCityProps> {
  constructor(props: IFearCityProps) {
    super(props);
  }

  public render() {
    return (
      <div className="fearCity">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        <ConnectedButtonA />
        <LeftWall />
        <RightWall />
        <PersonA
          showDialogC={this.props.showDialogC}
          hideDialogC={this.props.hideDialogC}
        />
        <DialogC isShowDialog={this.props.isShowDialogC} />
        <PersonB />
        <PersonC />
        <PersonD />
      </div>
    );
  }
}

export default FearCity;
