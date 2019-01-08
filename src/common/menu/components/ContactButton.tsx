import * as React from "react";
import { Link } from "react-router-dom";

interface IContactButtonProps {
  closeMenu: () => void;
}

class ContactButton extends React.Component<IContactButtonProps> {
  constructor(props: IContactButtonProps) {
    super(props);
  }
  public render() {
    return (
      <svg
        className="contact-button"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <Link to="/contact" onClick={this.props.closeMenu}>
          <circle cx="20" cy="20" r="20" />
        </Link>
      </svg>
    );
  }
}

export default ContactButton;
