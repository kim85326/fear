import * as React from "react";
import Menu from "./Menu";
import "../static/menu.css";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";

interface IMenuWrapperProps {
  isOpening: boolean;
  isOpen: boolean;
  isClosing: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

class MenuWrapper extends React.Component<IMenuWrapperProps> {
  constructor(props: IMenuWrapperProps) {
    super(props);
  }

  public render() {
    return (
      <div className="menu-wrapper">
        <OpenMenuButton
          isOpening={this.props.isOpening}
          isOpen={this.props.isOpen}
          openMenu={this.props.openMenu}
        />
        {this.props.isOpen ? <div className="menu-mask" /> : null}
        <CloseMenuButton
          isOpen={this.props.isOpen}
          isClosing={this.props.isClosing}
          closeMenu={this.props.closeMenu}
        />
        <Menu
          isOpening={this.props.isOpening}
          isOpen={this.props.isOpen}
          isClosing={this.props.isClosing}
          closeMenu={this.props.closeMenu}
        />
      </div>
    );
  }
}

export default MenuWrapper;
