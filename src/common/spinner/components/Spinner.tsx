import * as React from "react";
import "../static/spinner.css";

class Spinner extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    );
  }
}

export default Spinner;
