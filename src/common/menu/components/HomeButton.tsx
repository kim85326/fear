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
        viewBox="0 0 99.227 98.287"
      >
        <Link to="/" onClick={this.props.closeMenu}>
          <g>
            <path
              fill="#5B81B6"
              d="M90.738,57.229c5.883-2.748,9.445-9.173,8.264-15.874c-1.199-6.802-6.898-11.667-13.494-12.112
		c2.742-5.888,1.34-13.099-3.873-17.473c-5.291-4.44-12.783-4.504-18.121-0.605C61.828,4.894,56.119,0.271,49.316,0.271
		c-6.909,0-12.688,4.766-14.274,11.184c-5.32-3.721-12.666-3.593-17.879,0.781c-5.292,4.44-6.655,11.806-3.743,17.741
		c-6.469,0.571-12.014,5.39-13.195,12.09C-0.974,48.87,2.716,55.39,8.762,58.063c-4.589,4.596-5.738,11.852-2.337,17.744
		c3.454,5.982,10.471,8.605,16.822,6.766c-0.561,6.471,3.223,12.768,9.615,15.096c6.491,2.361,13.553-0.141,17.237-5.631
		c3.729,5.318,10.676,7.711,17.068,5.383c6.492-2.363,10.293-8.818,9.586-15.391c6.273,1.676,13.133-0.957,16.533-6.848
		C96.742,69.2,95.504,61.812,90.738,57.229z"
            />

            <polyline
              fill="none"
              stroke="#FCF8ED"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="75.623,50.065 49.72,24.158 23.817,50.065"
            />

            <polyline
              fill="none"
              stroke="#FCF8ED"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="66.299,40.613 66.299,68.19 33.268,68.19 33.268,40.613"
            />
          </g>
        </Link>
      </svg>
    );
  }
}

export default HomeButton;
