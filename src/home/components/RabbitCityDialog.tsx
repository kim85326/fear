import * as React from "react";
import "../static/rabbitCityDialog.css";

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
            className="st62"
            d="M70.4,0.3c38.3,0,69.4,23.6,69.4,52.7c0,13.4-6.6,25.6-17.5,34.9l13.1,17.7l-23.5-10.5
	c-11.6,6.6-26,10.5-41.6,10.5C32,105.6,1,82,1,52.9C1,23.9,32,0.3,70.4,0.3"
          />
        </a>
      </svg>
    );
  }
}

export default RabbitCityDialog;
