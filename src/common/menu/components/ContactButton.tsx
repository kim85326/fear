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
        viewBox="0 0 99.227 98.287"
      >
        <Link to="/contact" onClick={this.props.closeMenu}>
          <g>
            <path
              fill="#E77452"
              d="M90.737,56.959c5.884-2.748,9.445-9.173,8.264-15.874c-1.199-6.802-6.896-11.667-13.494-12.112
		c2.742-5.888,1.34-13.099-3.872-17.473c-5.291-4.44-12.783-4.504-18.122-0.605C61.828,4.623,56.119,0,49.315,0
		c-6.908,0-12.688,4.766-14.272,11.184c-5.321-3.721-12.667-3.593-17.879,0.781c-5.292,4.44-6.655,11.806-3.743,17.741
		c-6.469,0.571-12.014,5.39-13.195,12.09c-1.199,6.803,2.491,13.323,8.537,15.997c-4.589,4.595-5.738,11.852-2.337,17.744
		c3.454,5.982,10.472,8.604,16.822,6.766c-0.562,6.471,3.222,12.768,9.615,15.096c6.491,2.361,13.553-0.141,17.236-5.631
		c3.729,5.318,10.675,7.711,17.067,5.383c6.492-2.363,10.293-8.818,9.586-15.391c6.274,1.676,13.133-0.957,16.534-6.848
		C96.741,68.93,95.503,61.54,90.737,56.959z"
            />
            <circle fill="#FCF8ED" cx="44.967" cy="67.283" r="2.368" />
            <circle fill="#FCF8ED" cx="54.259" cy="67.283" r="2.368" />
            <path
              fill="none"
              stroke="#FCF8ED"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="
		M34.416,50.618c0,0-13.046-27.831,0.173-30.925c13.261-3.106,14.52,27.87,14.52,27.87S48.725,16.697,62.199,18.85
		c13.983,2.234,1.233,31.769,1.233,31.769s6.714,3.784,6.714,14.013c0,11.053-9.449,16.832-21.038,16.832
		c-10.921,0-21.038-5.107-21.038-17.543C28.07,55.703,34.416,50.618,34.416,50.618z"
            />
          </g>
        </Link>
      </svg>
    );
  }
}

export default ContactButton;
