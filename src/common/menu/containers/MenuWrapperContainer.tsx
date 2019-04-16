import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  openingMenuAction,
  openMenuAction,
  closeMenuAction,
  closingMenuAction
} from "../MenuActions";
import MenuWrapper from "../components/MenuWrapper";
import { IAppState } from "src/app/AppReducer";

interface IMenuWrapperContainerProps extends IMenuWrapperStateProps {
  dispatch: Dispatch;
}

interface IMenuWrapperStateProps {
  isOpening: boolean;
  isOpen: boolean;
  isClosing: boolean;
}

const mapStateToProps = (state: IAppState): IMenuWrapperStateProps => ({
  isOpening: state.menuState.isOpening,
  isOpen: state.menuState.isOpen,
  isClosing: state.menuState.isClosing
});

class MenuWrapperContainer extends React.Component<IMenuWrapperContainerProps> {
  constructor(props: IMenuWrapperContainerProps) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.setPage = this.setPage.bind(this);
  }
  public render() {
    return (
      <MenuWrapper
        isOpening={this.props.isOpening}
        isOpen={this.props.isOpen}
        isClosing={this.props.isClosing}
        openMenu={this.openMenu}
        closeMenu={this.closeMenu}
        setPage={this.setPage}
      />
    );
  }

  private openMenu(): void {
    this.props.dispatch(openingMenuAction());
    setTimeout(() => {
      this.props.dispatch(openMenuAction());
    }, 500);
  }

  private closeMenu(): void {
    this.props.dispatch(closingMenuAction());
    setTimeout(() => {
      this.props.dispatch(closeMenuAction());
    }, 500);
  }

  private setPage(): void {
    alert("兔子村目前正在裝修中");
  }
}

const ConnectedMenuWrapper = connect(mapStateToProps)(MenuWrapperContainer);

export default ConnectedMenuWrapper;
