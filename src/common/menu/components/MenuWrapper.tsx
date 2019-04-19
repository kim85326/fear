import * as React from "react";
import { CSSTransition } from "react-transition-group";
import "../static/menu.css";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";
import Menu from "./Menu";

interface IMenuWrapperProps {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  setPage: () => void;
}

class MenuWrapper extends React.Component<IMenuWrapperProps> {
  constructor(props: IMenuWrapperProps) {
    super(props);
  }

  public render() {
    return (
      <div className="menu-wrapper">
        <OpenMenuButton
          isOpen={this.props.isOpen}
          openMenu={this.props.openMenu}
        />
        <CSSTransition
          in={this.props.isOpen}
          timeout={{ enter: 500, exit: 500 }}
          classNames="show"
        >
          <div className="menu-mask" />
        </CSSTransition>
        <CloseMenuButton
          isOpen={this.props.isOpen}
          closeMenu={this.props.closeMenu}
        />
        <Menu isOpen={this.props.isOpen} handleClick={this.props.setPage} />
      </div>
    );
  }
}

export default MenuWrapper;
