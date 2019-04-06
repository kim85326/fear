import * as React from "react";

interface IVirusHProps {
  handleClick: () => void;
}

class VirusH extends React.Component<IVirusHProps> {
  public constructor(props: IVirusHProps) {
    super(props);
  }

  public render() {
    return (
      <a onClick={this.props.handleClick}>
        <svg
          className="virus virusH"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 160 167"
        >
          <image
            width="160"
            height="167"
            xlinkHref="data:image/png;base64,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"
          />
        </svg>
      </a>
    );
  }
}

export default VirusH;
