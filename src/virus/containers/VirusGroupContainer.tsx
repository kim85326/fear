import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IAppState } from "src/app/AppReducer";
import { IViruses, VirusId } from "src/virus/constants/Virus";
import { hideVirusAction } from "../virusAction";
import "../static/virusGroup.css";
import VirusA from "../components/VirusA";
import VirusB from "../components/VirusB";
import VirusC from "../components/VirusC";
import VirusD from "../components/VirusD";
import VirusE from "../components/VirusE";
import VirusF from "../components/VirusF";
import VirusG from "../components/VirusG";

interface IVirusGroupContainerProps extends IVirusGroupStateProps {
  dispatch: Dispatch;
}

interface IVirusGroupStateProps {
  viruses: IViruses;
}

const mapStateToProps = (state: IAppState): IVirusGroupStateProps => ({
  viruses: state.virusState.viruses
});

class VirusGroupContainer extends React.Component<IVirusGroupContainerProps> {
  constructor(props: IVirusGroupContainerProps) {
    super(props);
  }

  public render() {
    return (
      <div className="virus-group">
        {this.props.viruses.virusA.isShow ? (
          <VirusA handleClick={this.hideVirus.bind(this, VirusId.virusA)} />
        ) : null}
        {this.props.viruses.virusB.isShow ? (
          <VirusB handleClick={this.hideVirus.bind(this, VirusId.virusB)} />
        ) : null}
        {this.props.viruses.virusC.isShow ? (
          <VirusC handleClick={this.hideVirus.bind(this, VirusId.virusC)} />
        ) : null}
        {this.props.viruses.virusD.isShow ? (
          <VirusD handleClick={this.hideVirus.bind(this, VirusId.virusD)} />
        ) : null}
        {this.props.viruses.virusE.isShow ? (
          <VirusE handleClick={this.hideVirus.bind(this, VirusId.virusE)} />
        ) : null}
        {this.props.viruses.virusF.isShow ? (
          <VirusF handleClick={this.hideVirus.bind(this, VirusId.virusF)} />
        ) : null}
        {this.props.viruses.virusG.isShow ? (
          <VirusG handleClick={this.hideVirus.bind(this, VirusId.virusG)} />
        ) : null}
      </div>
    );
  }

  private hideVirus(virusId: VirusId): void {
    this.props.dispatch(hideVirusAction(virusId));
  }
}

const ConnectedVirusGroup = connect(mapStateToProps)(VirusGroupContainer);

export default ConnectedVirusGroup;
