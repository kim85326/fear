import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { openMenuAction, closeMenuAction } from "../MenuActions";
import MenuWrapper from "../components/MenuWrapper";
import { IAppState } from "src/app/AppReducer";
import { setPageAction } from "src/page/PageManagementAction";
import { Page } from "src/page/constants/Page";

interface IMenuWrapperContainerProps extends IMenuWrapperStateProps {
  dispatch: Dispatch;
}

interface IMenuWrapperStateProps {
  isOpen: boolean;
}

const mapStateToProps = (state: IAppState): IMenuWrapperStateProps => ({
  isOpen: state.menuState.isOpen
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
        isOpen={this.props.isOpen}
        openMenu={this.openMenu}
        closeMenu={this.closeMenu}
        setPage={this.setPage}
      />
    );
  }

  private openMenu(): void {
    this.props.dispatch(openMenuAction());
  }

  private closeMenu(): void {
    this.props.dispatch(closeMenuAction());
  }

  private setPage(): void {
    this.props.dispatch(closeMenuAction());
    this.props.dispatch(setPageAction(Page.rabbitCity));
  }
}

const ConnectedMenuWrapper = connect(mapStateToProps)(MenuWrapperContainer);

export default ConnectedMenuWrapper;
