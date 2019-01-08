import * as React from "react";
import { Link } from "react-router-dom";

interface IHomeButtonProps {
  closeMenu: () => void;
}

class HomeButton extends React.Component<IHomeButtonProps> {
  constructor(props: IHomeButtonProps) {
    super(props);
  }
  public render() {
    return (
      <svg
        className="home-button"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <Link to="/" onClick={this.props.closeMenu}>
          <circle cx="20" cy="20" r="20" />
        </Link>
      </svg>
    );
  }
}

export default HomeButton;
