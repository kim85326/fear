import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonK from "../components/ButtonK";
import { resetAppAction, setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";

interface IButtonKContainerProps extends IButtonKStateProps {
  dispatch: Dispatch;
}

interface IButtonKStateProps {
  isShowButtonK: boolean;
}

const mapStateToProps = (state: IAppState): IButtonKStateProps => ({
  isShowButtonK: state.endingState.isShowButtonK
});

class ButtonKContainer extends React.Component<IButtonKContainerProps> {
  constructor(props: IButtonKContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ButtonK
        isShowButton={this.props.isShowButtonK}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(resetAppAction());
    this.props.dispatch(setPageAction(Page.fearCity));
  }
}

const ConnectedButtonK = connect(mapStateToProps)(ButtonKContainer);

export default ConnectedButtonK;
