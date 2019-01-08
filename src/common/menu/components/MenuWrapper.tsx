import * as React from "react";
import Menu from "./Menu";
import "../static/menu.css";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";

interface IMenuWrapperProps {
  openMenu: () => void;
  closeMenu: () => void;
  isOpen: boolean;
}

class MenuWrapper extends React.Component<IMenuWrapperProps> {
  constructor(props: IMenuWrapperProps) {
    super(props);
  }
  public render() {
    return (
      <div className="menu-wrapper">
        <OpenMenuButton openMenu={this.props.openMenu} />
        {this.props.isOpen ? <div className="menu-mask" /> : null}
        <CloseMenuButton
          closeMenu={this.props.closeMenu}
          isOpen={this.props.isOpen}
        />
        <Menu isOpen={this.props.isOpen} closeMenu={this.props.closeMenu} />
      </div>
    );
  }
}

export default MenuWrapper;
