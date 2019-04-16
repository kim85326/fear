import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonJ from "../components/ButtonJ";
import { setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";

interface IButtonJContainerProps extends IButtonJStateProps {
  dispatch: Dispatch;
}

interface IButtonJStateProps {
  isShowButtonJ: boolean;
}

const mapStateToProps = (state: IAppState): IButtonJStateProps => ({
  isShowButtonJ: state.endingState.isShowButtonJ
});

class ButtonJContainer extends React.Component<IButtonJContainerProps> {
  constructor(props: IButtonJContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ButtonJ
        isShowButton={this.props.isShowButtonJ}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setPageAction(Page.submitFear));
  }
}

const ConnectedButtonJ = connect(mapStateToProps)(ButtonJContainer);

export default ConnectedButtonJ;
