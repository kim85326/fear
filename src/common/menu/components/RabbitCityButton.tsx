import * as React from "react";

interface IRabbitCityButtonProps {
  handleClick: () => void;
}

class RabbitCityButton extends React.Component<IRabbitCityButtonProps> {
  constructor(props: IRabbitCityButtonProps) {
    super(props);
  }
  public render() {
    return (
      <a onClick={this.props.handleClick}>
        <svg
          className="contact-button"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 99.227 98.287"
        >
          <g>
            <path
              fill="#F17752"
              d="M91.5,34.2c-1.2-0.9-1.8-2.4-1.6-4C91.1,19.8,83.6,10.2,73,9c-1.5-0.2-3-0.2-4.4,0c-1.5,0.2-3-0.4-4-1.6
		c-6.6-8.3-18.7-9.7-27-3.1c-1.2,0.9-2.2,2-3.1,3.1c-0.9,1.2-2.4,1.8-4,1.6C20,7.8,10.5,15.3,9.2,25.9c-0.2,1.5-0.2,3,0,4.4
		c0.2,1.5-0.4,3-1.6,4c-8.3,6.6-9.7,18.7-3.1,27c0.9,1.2,2,2.2,3.1,3.1c1.2,0.9,1.8,2.4,1.6,3.9C8,78.8,15.6,88.4,26.1,89.6
		c1.5,0.2,3,0.2,4.4,0c1.5-0.2,3,0.4,4,1.6c6.6,8.3,18.7,9.7,27,3.1c1.2-0.9,2.2-2,3.1-3.1c1-1.2,2.5-1.8,4-1.6
		c10.5,1.2,20.1-6.3,21.3-16.9c0.2-1.5,0.2-3,0-4.4c-0.2-1.5,0.4-3,1.6-3.9c4.6-3.7,7.3-9.2,7.3-15.1C98.8,43.4,96.1,37.9,91.5,34.2
		z M49.8,78.8c-12.2,0-20.1-6.7-20.1-17.1c0-5.8,3.2-10,5-11.9c-2.1-4.9-6.7-17-3.4-23.7c1.1-2.2,3-3.7,5.5-4.3
		c2.6-0.6,5.1-0.1,7.1,1.5c0.5,0.4,3.3,2.7,5.4,8.7c1.8-6.1,4.4-8.6,4.9-9c2-1.7,4.4-2.4,7.1-2c2.6,0.4,4.6,1.8,5.9,4
		c3.7,6.6-0.6,19.3-2.7,24.6c2,1.7,5.3,5.7,5.3,12.7C69.8,72.2,61.8,78.8,49.8,78.8z"
            />
            <path
              fill="#F17752"
              d="M61.2,52.2c-0.9-0.6-1.3-1.9-0.9-2.9c2.5-6,6-17.5,3.3-22.2c-0.6-1.1-1.6-1.8-3-2c-1.5-0.2-2.7,0.1-3.8,1
		c-4.3,3.8-5.2,15.5-5.1,19.7c0,1.1-0.9,2-1.9,2c-1.1,0.1-2-0.8-2.1-1.9c-0.2-4.2-1.7-15.9-6.2-19.4c-1.1-0.9-2.3-1.1-3.8-0.8
		c-1.3,0.3-2.2,1-2.8,2.2c-2.4,4.8,1.3,15.7,3.9,21.4c0.4,1,0.2,2.1-0.6,2.8c-0.8,0.7-4.6,4.3-4.6,9.7c0,12.1,12.3,13.1,16.1,13.1
		c7.4,0,16.1-3.3,16.1-12.4C65.8,55.6,62,52.7,61.2,52.2z M45.6,67.7c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4
		c1.3,0,2.4,1.1,2.4,2.4C48,66.6,46.9,67.7,45.6,67.7z M54.9,67.7c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4
		C57.3,66.6,56.2,67.7,54.9,67.7z"
            />
          </g>
        </svg>
      </a>
    );
  }
}

export default RabbitCityButton;
