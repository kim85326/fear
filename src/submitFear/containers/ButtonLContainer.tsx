import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonL from "../components/ButtonL";
import { setPageAction } from 'src/page/PageManagementAction';
import { Page } from 'src/page/constants/Page';

interface IButtonLContainerProps extends IButtonLStateProps {
  dispatch: Dispatch;
}

interface IButtonLStateProps {
  isShowButtonL: boolean;
}

const mapStateToProps = (state: IAppState): IButtonLStateProps => ({
  isShowButtonL: state.submitFearState.isShowButtonL
});

class ButtonLContainer extends React.Component<IButtonLContainerProps> {
  constructor(props: IButtonLContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ButtonL
        isShowButton={this.props.isShowButtonL}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setPageAction(Page.rabbitCity));
  }
}

const ConnectedButtonL = connect(mapStateToProps)(ButtonLContainer);

export default ConnectedButtonL;
