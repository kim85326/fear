import * as React from "react";
import { Link } from "react-router-dom";
import ButtonIText from "./ButtonIText";
import { CSSTransition } from "react-transition-group";

interface IButtonIProps {
  isShowButton: boolean;
  handleClick: () => void;
}

interface IButtonIState {
  backgroundColor: string;
}

class ButtonI extends React.Component<IButtonIProps, IButtonIState> {
  constructor(props: IButtonIProps) {
    super(props);

    this.state = {
      backgroundColor: "#E77452"
    };
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowButton}
        timeout={{ enter: 1000 }}
        classNames="show"
      >
        <Link
          to="/ending"
          className="buttonI buttonHI"
          onClick={this.props.handleClick}
          onMouseEnter={this.changeBackgroundColor.bind(this, "#8A8077")}
          onMouseLeave={this.changeBackgroundColor.bind(this, "#E77452")}
        >
          <CSSTransition
            in={this.props.isShowButton}
            timeout={{ enter: 1000 }}
            classNames="zoom"
          >
            <svg
              className="buttonI-background buttonHI-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 433.8 139.9"
            >
              <path
                fill={this.state.backgroundColor}
                d="M422.006,139.383H11c-6.075,0-11-4.925-11-11V11C0,4.925,4.925,0,11,0h411.006
	c6.074,0,11,4.925,11,11v117.383C433.006,134.458,428.081,139.383,422.006,139.383"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowButton}
            timeout={{ enter: 1000 }}
            classNames="show"
          >
            <ButtonIText />
          </CSSTransition>
        </Link>
      </CSSTransition>
    );
  }

  private changeBackgroundColor(color: string) {
    this.setState({ backgroundColor: color });
  }
}

export default ButtonI;
