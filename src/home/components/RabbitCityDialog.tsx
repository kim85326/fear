import * as React from "react";

interface IRabbitCityDialogProps {
  isShowingDialog: boolean;
  isHidingDialog: boolean;
  dialogX: number;
  dialogY: number;
}

class RabbitCityDialog extends React.Component<IRabbitCityDialogProps> {
  constructor(props: IRabbitCityDialogProps) {
    super(props);
  }

  public render() {
    return (
      <svg
        className={`city-dialog rabbit-city-dialog 
          ${this.props.isShowingDialog ? "isShowing" : ""}
          ${this.props.isHidingDialog ? "isHiding" : ""}
        `}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 140.7 106.1"
        style={{ top: this.props.dialogY, left: this.props.dialogX }}
      >
        <a>
          <path
            fill="#F17752"
            d="M70.4,0.3c38.3,0,69.4,23.6,69.4,52.7c0,13.1-6.3,25-16.7,34.2c-0.4,0.4-0.5,1-0.2,1.5l9.9,13.4
		c0.7,0.9-0.3,2.2-1.4,1.7l-19-8.5c-0.3-0.1-0.7-0.1-1,0c-11.5,6.4-25.7,10.2-41.1,10.2C32.1,105.6,1.1,82,1.1,52.9
		S32.1,0.3,70.4,0.3z"
          />
          <g>
            <path
              fill="#FCF8ED"
              d="M33.8,52.7c-0.3,1.6-0.8,3.2-1.4,4.5c0.3,0.2,0.6,0.4,1.1,0.7c1.2,0.7,2.8,0.8,4.8,0.8s5-0.2,6.9-0.4
		c-0.2,0.5-0.6,1.5-0.6,2.1c-1.4,0.1-4.4,0.2-6.4,0.2c-2.3,0-3.7-0.2-4.9-0.9c-0.7-0.4-1.3-1-1.7-1c-0.4,0-1,1.2-1.4,2.1l-1.4-1.9
		c0.6-0.7,1.2-1.3,1.8-1.6c0.4-0.9,0.7-1.9,1-3h-2.2c0.4-1,0.9-2.4,1.2-3.7h-1.5v-1.8h4c-0.4,1.2-0.8,2.6-1.2,3.8h0.7l0.3-0.1
		L33.8,52.7z M30.9,48.2c-0.2-0.8-0.6-2-0.9-2.9l1.8-0.5c0.3,0.9,0.8,2.1,1,2.8L30.9,48.2z M34.8,50.8c-0.3,0.3-0.6,0.6-0.9,0.9
		c-0.2-0.4-0.8-1.4-1.1-1.9c1.4-1.2,2.6-3.2,3.3-5.2l1.8,0.5c-0.3,0.7-0.6,1.5-0.9,2.2h2.6c-0.2-0.6-0.5-1.3-0.8-1.8l1.9-0.5
		c0.4,0.7,0.9,1.7,1.1,2.4h2.7v1.7H41v1h2.8v1.6H41v1.1h2.7v1.6H41v1.1h3.6v1.7h-7.9v0.7h-2v-7.1H34.8z M39.1,49.1h-2.3v1h2.3V49.1z
		 M39.1,51.7h-2.3v1.1h2.3V51.7z M39.1,54.4h-2.3v1.1h2.3V54.4z"
            />
            <path
              fill="#FCF8ED"
              d="M55.4,45.6c0,3.2,0.5,9.5,6.8,13.2c-0.4,0.4-1.3,1.2-1.6,1.8c-3.5-2.1-5.4-5.4-6.3-8.4C53,56,51,58.9,48,60.7
		c-0.4-0.4-1.3-1.3-1.9-1.7c3.6-1.8,5.6-5.1,6.5-9.6l1,0.2c-0.1-0.7-0.2-1.3-0.2-1.8h-3.9v-2.1L55.4,45.6L55.4,45.6z"
            />
            <path
              fill="#FCF8ED"
              d="M77.5,57c0.4,0.3,1.2,0.6,1.7,0.7c-0.2,2.3-0.8,2.8-2.5,2.8H74c-2.2,0-2.7-0.6-2.7-2.4v-2.7
		c-1,2.3-2.9,4.2-7.1,5.3c-0.2-0.5-0.7-1.3-1.1-1.7c3.5-0.8,5.2-2.2,6-3.9H65v-4c-0.2,0.2-0.4,0.3-0.6,0.5c-0.3-0.6-1-1.3-1.4-1.6
		c2.4-1.5,4-3.6,4.9-5.4L70,45c-0.1,0.3-0.3,0.5-0.4,0.8H73l0.3-0.1l1.4,0.9c-0.4,0.7-1,1.6-1.7,2.4h4.7v6.1h-2.3
		C76.2,55.7,77.1,56.5,77.5,57L77.5,57z M69.9,53.3c0.2-0.8,0.3-1.6,0.3-2.5H67v2.5H69.9z M68.5,47.5c-0.4,0.5-0.8,1-1.2,1.5h3.5
		c0.4-0.5,0.8-1,1.1-1.5H68.5z M75.7,50.8h-3.3c-0.1,0.9-0.2,1.7-0.3,2.5h3.7L75.7,50.8L75.7,50.8z M76.6,58.8
		c0.6,0,0.8-0.2,0.8-1.6l-1.3,1.1c-0.4-0.6-1.4-1.6-2.2-2.2l1.1-0.9h-1.6v3c0,0.5,0.1,0.6,0.9,0.6C74.3,58.8,76.6,58.8,76.6,58.8z"
            />
            <path
              fill="#FCF8ED"
              d="M96.1,54.1h-6.6v4.1c0,1.1-0.3,1.7-1.1,2c-0.8,0.3-2,0.4-3.6,0.4c-0.1-0.6-0.5-1.5-0.9-2.1
		c1.2,0.1,2.5,0.1,2.9,0.1s0.5-0.1,0.5-0.4v-4.1h-6.8v-2h6.8v-2.4c1.1-0.5,2.3-1.3,3.3-2h-8.4v-2h10.7l0.5-0.1l1.5,1.2
		c-1.5,1.4-3.5,3-5.5,4v1.3H96L96.1,54.1L96.1,54.1z"
            />
            <path
              fill="#FCF8ED"
              d="M102.1,50.2c0.6,0.7,2.1,2.4,2.4,2.8l-1.1,2c-0.3-0.6-0.8-1.4-1.3-2.2v7.8h-2v-6.4c-0.5,1.3-1.1,2.5-1.7,3.3
		c-0.2-0.6-0.7-1.4-1-1.9c1.1-1.5,2.1-3.9,2.6-6h-2.2v-1.9h2.3v-3.2h2v3.2h2v1.9h-2C102.1,49.6,102.1,50.2,102.1,50.2z M113.4,50.2
		h-2.1V58c0,1.3-0.3,1.8-1,2.2c-0.7,0.3-1.9,0.4-3.6,0.4c-0.1-0.6-0.4-1.6-0.7-2.2c1.2,0.1,2.4,0.1,2.8,0.1s0.5-0.1,0.5-0.5v-7.8
		h-4.7v-2h4.7v-3.5h2.1v3.5h2.1v2H113.4z M106.6,56.1c-0.3-1.1-1-2.8-1.7-4.1l1.7-0.7c0.7,1.2,1.5,2.9,1.8,4L106.6,56.1z"
            />
          </g>
        </a>
      </svg>
    );
  }
}

export default RabbitCityDialog;
