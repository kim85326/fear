import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import ButtonE from "../components/ButtonE";
import { setIsShowButtonFAction, setIsShowButtonGAction } from '../StoryCActions';

interface IButtonEContainerProps extends IButtonEStateProps {
  dispatch: Dispatch;
}

interface IButtonEStateProps {
  isShowButtonE: boolean;
}

const mapStateToProps = (state: IAppState): IButtonEStateProps => ({
  isShowButtonE: state.storyCState.isShowButtonE
});

class ButtonEContainer extends React.Component<IButtonEContainerProps> {
  constructor(props: IButtonEContainerProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ButtonE
        isShowButton={this.props.isShowButtonE}
        handleClick={this.handleClick}
      />
    );
  }

  private handleClick() {
    this.props.dispatch(setIsShowButtonFAction(true));
    this.props.dispatch(setIsShowButtonGAction(true));
  }
}

const ConnectedButtonE = connect(mapStateToProps)(ButtonEContainer);

export default ConnectedButtonE;
