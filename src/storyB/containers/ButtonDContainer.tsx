import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonD from "../components/ButtonD";
import { setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";

interface IButtonDContainerProps extends IButtonDStateProps {
  dispatch: Dispatch;
}

interface IButtonDStateProps {
  isShowButtonD: boolean;
}

const mapStateToProps = (state: IAppState): IButtonDStateProps => ({
  isShowButtonD: state.storyBState.isShowButtonD
});

class ButtonDContainer extends React.Component<IButtonDContainerProps> {
  constructor(props: IButtonDContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ButtonD
        isShowButton={this.props.isShowButtonD}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setPageAction(Page.storyC));
  }
}

const ConnectedButtonD = connect(mapStateToProps)(ButtonDContainer);

export default ConnectedButtonD;
