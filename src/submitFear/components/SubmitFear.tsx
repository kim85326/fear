import * as React from "react";
import "../static/submitFear.css";
import ConnectedSubmitAnimation from "../containers/SubmitAnimationContainer";
import ConnectedButtonL from "../containers/ButtonLContainer";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmitButton";
import SmallAnswer from "./SmallAnswer";
import MediumAnswer from "./MediumAnswer";
import LargeAnswer from "./LargeAnswer";
import { convertToGeometricShape } from "../convertToGeometricShape";
import { ISizeAnswer } from "../containers/SubmitFearContainer";
import Lottie from "react-lottie";
import * as submitFearJson from "../static/submit_fear_background.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: submitFearJson
};

type IActiveAnswer = keyof ISizeAnswer | null;

interface ISumbitFearProps extends ISizeAnswer {
  tempAnswer: string;
  changeTempAnswer: (tempAnswer: string) => void;
  submitAnswer: (sizeAnswer: keyof ISizeAnswer, answer: string) => void;
  isSubmitted: boolean;
}

interface ISumbitFearState {
  isActive: IActiveAnswer;
}

class SumbitFear extends React.Component<ISumbitFearProps, ISumbitFearState> {
  constructor(props: ISumbitFearProps) {
    super(props);
    this.state = {
      isActive: null
    };
    this.handleChangeTempAnswer = this.handleChangeTempAnswer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <>
        <div className="submitFear-background">
          <Lottie options={defaultOptions} />
        </div>
        <ConnectedSubmitAnimation />
        {this.getLabelDom()}
        {this.getInputDom()}
        <SmallAnswer isActive={this.getAnswerIsActive("smallAnswer")}>
          {this.convertToAnswerCharDoms(this.props.smallAnswer)}
        </SmallAnswer>
        <MediumAnswer isActive={this.getAnswerIsActive("mediumAnswer")}>
          {this.convertToAnswerCharDoms(this.props.mediumAnswer)}
        </MediumAnswer>
        <LargeAnswer isActive={this.getAnswerIsActive("largeAnswer")}>
          {this.convertToAnswerCharDoms(this.props.largeAnswer)}
        </LargeAnswer>
        <ConnectedButtonL />
      </>
    );
  }

  private getAnswerIsActive(sizeAnswer: keyof ISizeAnswer): boolean {
    if (this.state.isActive === sizeAnswer) {
      return true;
    }
    return false;
  }

  private getLabelDom(): React.ReactNode {
    if (!this.props.isSubmitted) {
      return (
        <label className="answer-label">
          你身上也有怕怕病毒嗎？把你的病毒交給我吧！
        </label>
      );
    } else {
      return null;
    }
  }

  private getInputDom(): React.ReactNode {
    if (!this.props.isSubmitted) {
      return (
        <>
          <div className="answer-input-wrapper">
            <input
              type="text"
              className="answer-input"
              placeholder="說出來會舒服一點，輸入之文字將不會公開"
              onChange={this.handleChangeTempAnswer}
              value={this.props.tempAnswer}
              maxLength={15}
            />
            <div className="answer-count">
              (
              {this.props.tempAnswer.length < 15
                ? this.props.tempAnswer.length
                : 15}
              /15)
            </div>
          </div>
          <ResetButton handleClick={this.handleReset} />
          <SubmitButton handleClick={this.handleSubmit} />
        </>
      );
    } else {
      return null;
    }
  }

  private handleChangeTempAnswer(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    this.props.changeTempAnswer(event.target.value);
  }

  private handleReset(): void {
    this.props.changeTempAnswer("");
  }

  private handleSubmit(): void {
    const answer = this.props.tempAnswer;

    if (answer.trim() === "") {
      return;
    }

    if (answer.length <= 2) {
      this.submitAnswer("smallAnswer");
    } else if (answer.length > 2 && answer.length <= 10) {
      this.submitAnswer("mediumAnswer");
    } else {
      this.submitAnswer("largeAnswer");
    }
  }

  private submitAnswer(sizeAnswer: keyof ISizeAnswer): void {
    const answer = this.props.tempAnswer;

    this.props.submitAnswer(sizeAnswer, answer);
    this.handleReset();

    setTimeout(() => {
      this.setState({
        isActive: sizeAnswer
      });
    }, 5000);
  }

  private convertToAnswerCharDoms(answer: string): React.ReactNode {
    if (answer.length <= 0) {
      return null;
    }

    const charDom = [];

    for (const key of Object.keys(answer)) {
      const char = answer[key];
      charDom.push(
        <svg
          key={key}
          className="char"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 53 53"
        >
          {convertToGeometricShape(char)}
        </svg>
      );
    }

    return charDom;
  }
}

export default SumbitFear;
