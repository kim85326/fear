import * as React from "react";
import "../static/fearCity.css";
import FearCityDialog from "./FearCityDialog";

interface IFearCityState {
  isShowingDialog: boolean;
  isHidingDialog: boolean;
  dialogX: number;
  dialogY: number;
}

class FearCity extends React.Component<{}, IFearCityState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isShowingDialog: false,
      isHidingDialog: false,
      dialogX: 0,
      dialogY: 0
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  public render() {
    return (
      <div className="fear-city-wrapper city-wrapper">
        <svg
          className="fear-city city"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 511.5 402.6"
        >
          <a
            onMouseMove={this.onMouseMoveHandler}
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
          >
            <g>
              <path
                className="st50"
                d="M465.7,291.5c0,6.4-7.4,12.4-20.1,16.9c-3.7,1.3-15.6,4.7-20.6,8.6c-6.9,5.3-7.2,10.1-20.9,14.9
		c-17.3,6.1-44.8,10.7-61.2,10.8c-21.9,0.2-33.6-2.8-34.8-11.4h-156c3,2.7,5.9,6.7,4.7,11.5c-1.5,6.4-11.4,9.3-28,8.5
		c-14.7-0.7-24.9-3.1-27.8-7.3c-3.6-5.3,1.9-9.4,1.9-9.4c-10.7,3.6-24,2.8-35.5-3C55,325.4,52.8,315.6,47,312
		c-4-2.5-7.1-2.6-18.7-2.5c-11.6,0.2-28.3,0-28.4-10.6C0,289,25,281,25,281c0.7-12.4,5.9-9.1,8.6-17.3c3.1-9.1-6.4-14.2-6.4-26.1
		c0-11.9,9.6-14.1,13.2-26.1c4.2-14-4.8-28.4,0-48.3c4.8-19.9,37.1-38.7,37.1-38.7s-11.1-1-8.6-12.3C70.8,103.9,80.2,93,94.7,84
		c16.2-10,36-16.3,50-32.1C173.4,19.3,199.6,0,238.8,0c27.3,0,50.6,10.1,79.6,33.6C343.8,54,367,58,365.3,66
		c-1.1,5.2-8.1,4.8-8.1,4.8s25.1,8.6,34.4,26.2c11.5,21.5,8.9,30.8,14.2,45.1c5.2,14.2,28.6,24.9,31.3,47.7
		c2.7,22.8-3.6,34.4,1.8,49.4c5.6,15.6,15.2,15.3,18.2,26c2.4,8.9-3.1,17.3-3.1,17.3S465.7,283.1,465.7,291.5z"
              />
              <line
                className="st20"
                x1="303.6"
                y1="259.5"
                x2="303.6"
                y2="259.5"
              />
              <path
                className="st51"
                d="M287.8,288.6c0,0-1.9,0.9-4.3,2.6h-31.6v-6.5h28.2C282,288.4,287.8,288.6,287.8,288.6z"
              />
              <path
                className="st51"
                d="M283.5,291.2c-2.1,1.5-4.7,3.7-6.6,6.5h-25v-6.5H283.5z"
              />
              <path
                className="st51"
                d="M276.8,297.7c-1.3,1.9-2.4,4-2.9,6.5h-22.1v-6.5H276.8z"
              />
              <path
                className="st51"
                d="M274,310.7h-22.1v-6.5h22.1C273.5,306.2,273.5,308.3,274,310.7z"
              />
              <path
                className="st51"
                d="M276.7,317.2h-24.9v-6.5H274c0.2,0.8,0.4,1.5,0.6,2.3C275.1,314.5,275.8,315.9,276.7,317.2z"
              />
              <path
                className="st51"
                d="M283.7,323.6h-31.9v-6.5h24.9C278.5,319.8,281,321.9,283.7,323.6z"
              />
              <path
                className="st51"
                d="M308.1,331.3h-56.3v-7.7h31.9C293.9,330.1,308.1,331.3,308.1,331.3z"
              />
              <path
                className="st52"
                d="M324.9,210.8v17.3c-1.2,11.2-6.1,19-15.5,26.9c-1.9,1.6-3.9,3.2-5.8,4.6v-54.1l11.6,2.9L324.9,210.8z"
              />
              <polygon
                className="st53"
                points="281.5,191.6 250.8,191.6 216.5,175.7 247.2,175.7 273.5,187.9 	"
              />
              <path
                className="st13"
                d="M303.6,205.5v54.1c-11.5,8.4-22.4,13.1-24,20.8c-0.4,1.9-0.1,3.3,0.5,4.5h-7.4v-6.5h-6.1v-6.5h-4.9v-5.6h-9.8
		v-27.6h-40l-14.6,7.3v7.7h-28.3c-0.1-0.1-0.3-0.2-0.4-0.4c-7.7-6.1-14.2-5.5-23.6-10.8v-36.9h37.3v-13.8l34.3-16l34.3,16v13.8
		H303.6z"
              />
              <path
                className="st31"
                d="M211.8,263.2v68.1h-59.7c-2.7-2.4-5.5-3.8-5.5-3.8c3.6-3.6,3-13.3,3-19.9c2.9,2,7.1,3.7,12.6,2.9
		c9.4-1.4,7.4-10.7,7.4-10.7s10.2-1.6,11.8-15.3c1-8-0.7-15.3-4.2-21.4H211.8z"
              />
              <line
                className="st20"
                x1="177.3"
                y1="263.2"
                x2="177.3"
                y2="263.2"
              />
              <path
                className="st54"
                d="M221.6,253.5l-9.7,9.7h-34.5c-0.2-0.4-0.4-0.7-0.6-1.1c0,0,0,0,0-0.1c-0.2-0.3-0.4-0.6-0.5-0.8
		c-0.2-0.3-0.4-0.7-0.7-1c-0.2-0.3-0.4-0.6-0.7-0.9c-0.1-0.1-0.1-0.2-0.2-0.3c-0.2-0.3-0.5-0.6-0.7-0.9c-0.1-0.1-0.2-0.3-0.4-0.4
		c0,0-0.1-0.1-0.1-0.1c-0.1-0.2-0.3-0.3-0.5-0.5c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.3-0.3-0.4c-0.3-0.4-0.7-0.7-1-1
		c0,0,0,0-0.1-0.1c-0.3-0.3-0.7-0.6-1-0.9c-0.1-0.1-0.3-0.2-0.4-0.3c-0.3-0.3-0.7-0.6-1.1-0.9H221.6z"
              />
              <path
                className="st55"
                d="M151.1,169.5v36h-6.2v36.9c-1.8-1-3.8-2.3-5.9-3.9c-9-6.8-13-19.9-20.7-26v-43H151.1z"
              />
              <path
                className="st56"
                d="M118.3,169.5v43c-1.8-1.4-3.8-2.5-6.2-3c-3.4-0.7-6.5-0.4-9.2,0.3v-25.9L118.3,169.5z"
              />
              <polygon
                className="st56"
                points="166.5,183.8 166.5,205.5 151.1,205.5 151.1,169.5 	"
              />
              <path
                className="st55"
                d="M258.7,161.1c-5.8,9.4-3.8,18.1-3.8,18.1l-7.7-3.6h-6v-49h17.5L258.7,161.1z"
              />
              <path
                className="st31"
                d="M158.8,96.9v31.7c-7.5-6.2-17.5-0.3-17.5-0.3s-3.6-8-13.4-8c-3.2,0-5.6,1.1-7.5,2.6v-26H158.8z"
              />
              <polygon
                className="st51"
                points="241.2,109.5 241.2,175.7 229.7,175.7 229.7,103.1 	"
              />
              <path
                className="st54"
                d="M190.9,103.1v49.2c-6.1-0.1-11,0.7-17.1-1.6c-1.6-0.6-2.8-1.4-3.9-2.5v-45.1H190.9z"
              />
              <path
                className="st31"
                d="M205.7,103.1v51.9c-1-0.4-2.1-0.7-3.2-1.1c-4.5-1.3-8.2-1.6-11.6-1.7v-49.2H205.7z"
              />
              <path
                className="st54"
                d="M229.7,103.1v72.5h-4.1c-3.5-7.6-8.3-16.1-19.9-20.6v-51.9H229.7z"
              />
              <rect
                x="171.2"
                y="220.4"
                className="st53"
                width="7"
                height="33.1"
              />
              <polyline
                className="st53"
                points="154.7,246.6 154.7,220.4 161.7,220.4 161.7,249.1 	"
              />
              <path
                className="st51"
                d="M170,103.1v45.1c-5.2-5.1-5-14.5-11.2-19.7V96.9L170,103.1z"
              />
              <polygon
                className="st56"
                points="211.5,75.5 211.5,103.1 197.8,103.1 197.8,87.9 201.6,84.4 	"
              />
              <path
                className="st13"
                d="M266.2,75.5v77.8c-2.8,2-5.4,4.5-7.5,7.9l0-34.5h-17.5v-17.1l-11.5-6.4h-18.1V75.5H266.2z"
              />
              <rect
                x="250.8"
                y="191.6"
                className="st52"
                width="30.7"
                height="13.8"
              />
              <polygon
                className="st31"
                points="258.7,126.6 241.2,85.1 232.9,105 241.2,109.5 241.2,126.6 	"
              />
              <polygon
                className="st51"
                points="294.7,177.2 294.7,205.5 281.5,205.5 281.5,191.6 273.5,187.9 	"
              />
              <polygon
                className="st54"
                points="315.2,177.2 315.2,208.3 303.6,205.5 294.7,205.5 294.7,177.2 	"
              />
              <path
                className="st31"
                d="M375.3,154.6v41.6c-2.6-0.3-5.2-0.8-7.9-1.8c-13.2-4.8-10.9-15.2-20.6-18.8c-6.7-2.5-7.8,2.2-15.9,1.5
		c-6.8-0.6-12.1-3.6-13.1-12.6c-0.7-5.9,0-23.6,0-23.6H356v13.6H375.3z"
              />
              <polygon
                className="st54"
                points="369.8,126.6 355.9,141 317.8,141 331.8,126.6 	"
              />
              <polygon
                className="st51"
                points="356,154.6 356,141 355.9,141 369.8,126.6 369.9,140.3 	"
              />
              <polygon
                className="st54"
                points="389.2,140.3 375.3,154.6 356,154.6 369.9,140.3 	"
              />
              <path
                className="st51"
                d="M389.2,140.3v55.4c-4.2,0.6-9,1.1-13.9,0.6v-41.6L389.2,140.3z"
              />
              <path
                className="st31"
                d="M290.9,128.8c-0.9,0.7-3.4,3-5,8.7c-2.2,8.2-11.7,10-19.7,15.8V85.1h20.3v26.5c-1.5,1.4-3,2.9-4.3,4.4
		c-4.5,5-6.4,10.2-3.7,13.7C281.9,134.4,289.2,129.9,290.9,128.8z"
              />
              <path
                className="st54"
                d="M295.8,91.3c-2.1,5.2-1.1,9.8-4.2,14.8c-0.9,1.4-2.9,3.3-5,5.5V85.1L295.8,91.3z"
              />
              <path
                className="st55"
                d="M201.6,79.3c0,1.7,0,5.2,0,5.2l-3.8,3.5v15.2h-23.2c0,0,0-17.5,0-23.9c0-6.4,3.3-16.1,13.5-16.1
		C198.3,63.2,201.6,72.5,201.6,79.3z"
              />
              <polygon
                className="st51"
                points="211.8,238.5 211.8,253.5 197.2,253.5 197.2,245.8 	"
              />
              <rect
                x="280.8"
                y="220.4"
                className="st53"
                width="7"
                height="34.8"
              />
              <path
                className="st53"
                d="M331.9,152.1v25.2c-0.3,0-0.6,0-1,0c-1.7-0.1-3.2-0.4-4.7-0.9v-24.2H331.9z"
              />
              <path
                className="st53"
                d="M366.6,164.1v30c-2.4-0.9-4.2-2.1-5.7-3.3v-26.7H366.6z"
              />
              <path
                className="st53"
                d="M343.8,152.1V175c-2.2-0.2-3.7,0.6-5.6,1.2v-24.1H343.8z"
              />
              <rect
                x="264.3"
                y="220.4"
                className="st53"
                width="7"
                height="34.8"
              />
              <path
                className="st25"
                d="M231,214.3h-23.4c0,0-0.8-11.8,9-17.2C231.9,197.1,231,214.3,231,214.3z"
              />
              <path
                className="st52"
                d="M207.5,214.3h-5.8c0,0-0.6-17.2,14.7-17.2C206.7,202.5,207.5,214.3,207.5,214.3z"
              />
              <rect
                x="214.5"
                y="115.8"
                className="st53"
                width="5.5"
                height="5.3"
              />
              <rect
                x="214.5"
                y="128.9"
                className="st53"
                width="5.5"
                height="5.3"
              />
              <rect
                x="214.5"
                y="142.1"
                className="st53"
                width="5.5"
                height="5.3"
              />
              <rect
                x="177.3"
                y="115.8"
                className="st53"
                width="5.5"
                height="5.3"
              />
              <rect
                x="177.3"
                y="128.9"
                className="st53"
                width="5.5"
                height="5.3"
              />
              <rect
                x="177.3"
                y="142.1"
                className="st53"
                width="5.5"
                height="5.3"
              />
              <rect
                x="127.4"
                y="179.5"
                className="st53"
                width="14.6"
                height="5.2"
              />
              <rect
                x="127.4"
                y="194.2"
                className="st53"
                width="14.6"
                height="5.2"
              />
              <path
                className="st57"
                d="M225.6,33.6c0,1.5-1.3,2.7-2.8,2.7c-1.5,0-2.8-1.2-2.8-2.7c0-1.5,1.3-2.7,2.8-2.7
		C224.3,30.9,225.6,32.1,225.6,33.6z"
              />
              <path
                className="st57"
                d="M235.7,33.6c0,1.5-1.3,2.7-2.8,2.7c-1.5,0-2.8-1.2-2.8-2.7c0-1.5,1.3-2.7,2.8-2.7
		C234.4,30.9,235.7,32.1,235.7,33.6z"
              />
              <polygon
                className="st51"
                points="221.6,253.5 221.6,331.3 211.8,331.3 211.8,263.2 	"
              />
              <rect
                x="251.9"
                y="266.2"
                className="st51"
                width="9.8"
                height="5.6"
              />
              <rect
                x="251.9"
                y="271.8"
                className="st51"
                width="14.7"
                height="6.5"
              />
              <rect
                x="251.9"
                y="278.3"
                className="st51"
                width="20.8"
                height="6.5"
              />
              <polygon
                className="st55"
                points="251.9,238.5 251.9,331.3 221.6,331.3 221.6,253.5 211.8,253.5 211.8,238.5 	"
              />
              <path
                className="st50"
                d="M102.9,276.1c0,0-0.5,11.4,7.1,14.7c5.9,2.6,9.9-0.7,9.9-0.7s-2.9,21.6,8.1,25.2c5.5,1.8,8.3-3.6,8.3-3.6
		s0,17.2,6.9,17.2c7.3,0,6.4-13,6.4-21.3"
              />
              <path
                className="st58"
                d="M227.3,268.6h14c0,0,2.8-21.5-7-21.5C224.5,247.1,227.3,268.6,227.3,268.6z"
              />
              <line
                className="st59"
                x1="234.3"
                y1="247.1"
                x2="234.3"
                y2="268.6"
              />
              <line
                className="st59"
                x1="227"
                y1="263.3"
                x2="241.7"
                y2="263.3"
              />
              <line
                className="st59"
                x1="227.1"
                y1="258.4"
                x2="241.6"
                y2="258.4"
              />
              <line
                className="st59"
                x1="227.9"
                y1="253.5"
                x2="240.8"
                y2="253.5"
              />
              <path
                className="st58"
                d="M227.3,303.2h14c0,0,2.8-21.5-7-21.5C224.5,281.6,227.3,303.2,227.3,303.2z"
              />
              <line
                className="st59"
                x1="234.3"
                y1="281.6"
                x2="234.3"
                y2="303.2"
              />
              <line
                className="st59"
                x1="227"
                y1="297.9"
                x2="241.7"
                y2="297.9"
              />
              <line className="st59" x1="227.1" y1="293" x2="241.6" y2="293" />
              <line
                className="st59"
                x1="227.9"
                y1="288.1"
                x2="240.8"
                y2="288.1"
              />
              <path
                className="st50"
                d="M144.9,303c0,0,5.8,9.2,17.3,7.5c9.4-1.4,7.4-10.7,7.4-10.7s10.2-1.6,11.8-15.3c1.6-13.1-3.7-24.2-13-31.4
		c-9.3-7.2-16.6-5-29.5-14.7c-11.1-8.3-14.5-26.3-26.9-29c-10.2-2.2-18.4,5-18.4,5"
              />
              <path
                className="st60"
                d="M409.9,212.7c-2.2-8-10.8-7.2-10.8-7.2s9.3-4.3,5.9-9.3c-4.1-6-20.7,4.5-37.6-1.7
		c-13.2-4.8-10.9-15.2-20.6-18.8c-6.7-2.5-7.8,2.2-15.9,1.5c-6.8-0.6-12.1-3.6-13.1-12.6"
              />
              <path
                className="st50"
                d="M115.1,130.9c0,0,3.1-10.5,12.9-10.5c9.7,0,13.4,8,13.4,8s9.9-5.9,17.5,0.3c7.5,6.2,5.6,18.5,15.1,22.1
		c9.4,3.6,16.1-0.4,28.7,3.3c14,4.1,19.3,13.5,23.1,21.7"
              />
            </g>
          </a>
        </svg>
        <FearCityDialog
          isShowingDialog={this.state.isShowingDialog}
          isHidingDialog={this.state.isHidingDialog}
          dialogX={this.state.dialogX}
          dialogY={this.state.dialogY}
        />
      </div>
    );
  }

  private onMouseEnterHandler(event: React.MouseEvent<HTMLElement>): void {
    this.setState({
      isShowingDialog: true,
      isHidingDialog: false
    });
  }

  private onMouseMoveHandler(event: React.MouseEvent<HTMLElement>): void {
    this.setState({
      dialogX: event.nativeEvent.offsetX,
      dialogY: event.nativeEvent.offsetY
    });
  }

  private onMouseLeaveHandler(event: React.MouseEvent<HTMLElement>) {
    this.setState({
      isShowingDialog: false,
      isHidingDialog: true
    });
  }
}

export default FearCity;
