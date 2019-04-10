import * as React from "react";
import DialogIText from "./DialogIText";
import { CSSTransition } from "react-transition-group";

interface IDialogIProps {
  isShowDialog: boolean;
}

class DialogI extends React.Component<IDialogIProps> {
  constructor(props: IDialogIProps) {
    super(props);
  }

  public render() {
    return (
      <CSSTransition
        in={this.props.isShowDialog}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="show"
      >
        <div className="dialogI dialogGHI">
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="zoom"
          >
            <svg
              className="dialogI-background dialogGHI-background"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 344.176 294.544"
            >
              <path
                style={{ fill: "#FCFAEE" }}
                d="M343.393,123.124c-4.16-20.387-23.922-34.965-46.801-36.3c9.506-17.642,4.645-39.253-13.434-52.359
	c-18.355-13.306-44.34-13.499-62.859-1.815C214.455,13.855,194.652,0,171.054,0c-23.96,0-44.009,14.283-49.505,33.518
	C103.09,22.366,77.614,22.75,59.535,35.855C41.179,49.162,36.449,71.236,46.55,89.023c-22.438,1.708-41.669,16.151-45.768,36.23
	c-4.161,20.387,8.639,39.925,29.609,47.939c-15.917,13.77-19.904,35.515-8.103,53.171c8.525,12.761,23.319,20.386,39.08,21.756
	l-20.095,39.719l42.439-21.974c5.032,11.658,15.672,21.421,30.274,26.013c22.515,7.08,47.008-0.418,59.786-16.869
	c12.933,15.934,37.024,23.103,59.2,16.129c22.517-7.08,35.702-26.426,33.25-46.125c21.762,5.024,45.551-2.864,57.351-20.521
	c11.98-17.927,7.687-40.068-8.847-53.798C335.138,162.457,347.492,143.203,343.393,123.124"
              />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={this.props.isShowDialog}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="show"
          >
            <DialogIText />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default DialogI;
