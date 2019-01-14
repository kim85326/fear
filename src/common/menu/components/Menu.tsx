import * as React from "react";
import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";
import { Link } from "react-router-dom";

interface IMenuProps {
  isOpening: boolean;
  isOpen: boolean;
  isClosing: boolean;
  closeMenu: () => void;
}

class Menu extends React.Component<IMenuProps> {
  constructor(props: IMenuProps) {
    super(props);
  }

  public render() {
    return (
      <div
        id="menu"
        className={`menu 
        ${this.props.isOpen ? "show" : ""} 
        ${this.props.isClosing ? "isClosing" : ""}`}
      >
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
              <div className="menu-body-item-number">01.</div>
              <div className="menu-body-item-text">恐懼資訊</div>
            </Link>
          </div>
          <div className="menu-body-item">
            <Link to="/" onClick={this.props.closeMenu}>
              <div className="menu-body-item-number">02.</div>
              <div className="menu-body-item-text">恐懼資訊</div>
            </Link>
          </div>
          <div className="menu-body-item">
            <Link to="/" onClick={this.props.closeMenu}>
              <div className="menu-body-item-number">03.</div>
              <div className="menu-body-item-text">恐懼資訊</div>
            </Link>
          </div>
          <div className="menu-body-item menu-body-item-help">
            <Link to="/" onClick={this.props.closeMenu}>
              <div className="menu-body-item-number">04.</div>
              <div className="menu-body-item-text">相關書籍</div>
            </Link>
          </div>
          <div className="menu-body-item menu-body-item-help">
            <Link to="/" onClick={this.props.closeMenu}>
              <div className="menu-body-item-number">05.</div>
              <div className="menu-body-item-text">諮詢管道</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
