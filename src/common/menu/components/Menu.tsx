import * as React from "react";
import MenuBackground from "./MenuBackground";
import ConnectedHomeButton from "../containers/HomeButtonContainer";
import ConnectedRabbitCityButton from "../containers/RabbitCityButtonContainer";
import { CSSTransition } from "react-transition-group";

interface IMenuProps {
  isOpen: boolean;
  handleClick: () => void;
}

class Menu extends React.Component<IMenuProps> {
  constructor(props: IMenuProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isOpen}
        timeout={{ enter: 1500, exit: 500 }}
        classNames="show"
      >
        <div id="menu" className="menu">
          <MenuBackground />
          <div className="menu-top">
            <div className="menu-top-item">
              <ConnectedHomeButton />
            </div>
            <div className="menu-top-item">
              <ConnectedRabbitCityButton />
            </div>
          </div>
          <div className="menu-body">
            <div className="menu-body-item">
              <a onClick={this.props.handleClick}>
                <div className="menu-body-item-number">01.</div>
                <div className="menu-body-item-text">恐懼資訊</div>
              </a>
            </div>
            <div className="menu-body-item">
              <a onClick={this.props.handleClick}>
                <div className="menu-body-item-number">02.</div>
                <div className="menu-body-item-text">恐懼資訊</div>
              </a>
            </div>
            <div className="menu-body-item">
              <a onClick={this.props.handleClick}>
                <div className="menu-body-item-number">03.</div>
                <div className="menu-body-item-text">恐懼資訊</div>
              </a>
            </div>
            <div className="menu-body-item menu-body-item-help">
              <a onClick={this.props.handleClick}>
                <div className="menu-body-item-number">04.</div>
                <div className="menu-body-item-text">相關書籍</div>
              </a>
            </div>
            <div className="menu-body-item menu-body-item-help">
              <a onClick={this.props.handleClick}>
                <div className="menu-body-item-number">05.</div>
                <div className="menu-body-item-text">諮詢管道</div>
              </a>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Menu;
