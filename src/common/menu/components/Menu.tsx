import * as React from "react";
import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";
import { Link } from "react-router-dom";

interface IMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

class Menu extends React.Component<IMenuProps> {
  constructor(props: IMenuProps) {
    super(props);
  }
  public render() {
    return (
      <div className={`menu ${this.props.isOpen ? "active" : ""}`}>
        <div className="menu-top">
          <div className="menu-top-item">
            <HomeButton closeMenu={this.props.closeMenu} />
          </div>
          <div className="menu-top-item">
            <ContactButton closeMenu={this.props.closeMenu} />
          </div>
        </div>
        <div className="menu-body">
          <div className="menu-body-item">
            <Link to="/" onClick={this.props.closeMenu}>
              111
            </Link>
          </div>
          <div className="menu-body-item">
            <Link to="/" onClick={this.props.closeMenu}>
              2222
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
