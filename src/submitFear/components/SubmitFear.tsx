import * as React from "react";
import "../static/submitFear.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/submit_fear.wav";
import ConnectedSubmitAnimation from "../containers/SubmitAnimationContainer";
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
      <div className="submit-fear">
        <div className="submit-fear-background">
          <Lottie options={defaultOptions} />
        </div>
        <ConnectedSubmitAnimation />
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
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
      </div>
    );
  }

  private getAnswerIsActive(sizeAnswer: keyof ISizeAnswer): boolean {
    if (this.state.isActive === sizeAnswer) {
      return true;
    }
    return false;
  }

  private getLabelDom(): React.ReactNode {
    return (
      <label className="answer-label">
        你身上也有怕怕病毒嗎？把你的病毒交給我吧！
      </label>
    );
  }

  private getInputDom(): React.ReactNode {
    if (!this.state.isActive) {
      return (
        <>
          <div className="answer-input-wrapper">
            <input
              type="text"
              className="answer-input"
              placeholder="說出來會舒服點，試著寫下你害怕的東西吧。"
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
      return <div>紅蘿蔔</div>;
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

    this.setState({
      isActive: sizeAnswer
    });
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
