import * as React from "react";
import Lottie from "react-lottie";
import * as submitJson from "../static/submit.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: submitJson
};

interface ISubmitAnimationProps {
  isShow: boolean;
}

class SubmitAnimation extends React.Component<ISubmitAnimationProps> {
  constructor(props: ISubmitAnimationProps) {
    super(props);
  }

  public render() {
    if (this.props.isShow) {
      return (
        <div className="submit-animation">
          <Lottie options={defaultOptions} />
        </div>
      );
    }
    return null;
  }
}

export default SubmitAnimation;
