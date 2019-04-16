import * as React from "react";
import "../static/fearCity.css";
import ConnectedButtonA from "../containers/ButtonAContainer";
import LeftWall from "./LeftWall";
import RightWall from "./RightWall";
import PersonA from "./PersonA";
import PersonB from "./PersonB";
import PersonC from "./PersonC";
import PersonD from "./PersonD";
import DialogC from "./DialogC";
import Stairs from "./Stairs";
import Windows from "./Windows";

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
      <>
        <Windows />
        <Stairs />
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
      </>
    );
  }
}

export default FearCity;
