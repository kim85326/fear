import * as React from "react";
import "../static/submitFear.css";
import ConnectedMenuWrapper from "src/common/menu/containers/MenuWrapperContainer";
import Sound from "src/common/sound/components/Sound";
import soundSrc from "../static/submit_fear.wav";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmitButton";
import SmallAnswer from "./SmallAnswer";
import MediumAnswer from "./MediumAnswer";
import LargeAnswer from "./LargeAnswer";
import { convertToGeometricShape } from "../convertToGeometricShape";

// Initialize Firebase
import * as firebase from "firebase";
import { firebaseConfig } from "../../config";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database().ref();
const fearAnswersDb = db.child("/fearAnswers");

interface ISizeAnswer {
  smallAnswer: string;
  mediumAnswer: string;
  largeAnswer: string;
}

type IActiveAnswer = keyof ISizeAnswer | null;

interface ISumbitFearState extends ISizeAnswer {
  tempAnswer: string;
  isActive: IActiveAnswer;
}

class SumbitFear extends React.Component<{}, ISumbitFearState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tempAnswer: "",
      smallAnswer: "",
      mediumAnswer: "",
      largeAnswer: "",
      isActive: null
    };
    this.handleChangeTempAnswer = this.handleChangeTempAnswer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public componentDidMount() {
    this.getAnswer("smallAnswer");
    this.getAnswer("mediumAnswer");
    this.getAnswer("largeAnswer");
  }

  public render() {
    return (
      <div className="submit-fear">
        <ConnectedMenuWrapper />
        <Sound src={soundSrc} />
        {this.getLabelDom()}
        {this.getInputDom()}
        <SmallAnswer isActive={this.getAnswerIsActive("smallAnswer")}>
          {this.convertToAnswerCharDoms(this.state.smallAnswer)}
        </SmallAnswer>
        <MediumAnswer isActive={this.getAnswerIsActive("mediumAnswer")}>
          {this.convertToAnswerCharDoms(this.state.mediumAnswer)}
        </MediumAnswer>
        <LargeAnswer isActive={this.getAnswerIsActive("largeAnswer")}>
          {this.convertToAnswerCharDoms(this.state.largeAnswer)}
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

  private getAnswer(sizeAnswer: keyof ISizeAnswer): void {
    fearAnswersDb
      .child(`/${sizeAnswer}`)
      .once("value")
      .then(snapshot => {
        const answers: string[] = [];

        snapshot.forEach(childSnapshot => {
          answers.push(childSnapshot.val().answer);
        });

        const randomNumber = Math.floor(Math.random() * answers.length);

        this.setState({
          [sizeAnswer]: answers[randomNumber]
        } as Pick<ISumbitFearState, keyof ISumbitFearState>);
      });
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
              value={this.state.tempAnswer}
              maxLength={15}
            />
            <div className="answer-count">
              (
              {this.state.tempAnswer.length < 15
                ? this.state.tempAnswer.length
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
    this.setState({
      tempAnswer: event.target.value
    });
  }

  private handleReset(): void {
    this.setState({
      tempAnswer: ""
    });
  }

  private handleSubmit(): void {
    const answer = this.state.tempAnswer;

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
    const answer = this.state.tempAnswer;
    const timeStamp = new Date().getTime();

    fearAnswersDb.child(`/${sizeAnswer}`).push({
      answer,
      create_time: timeStamp
    });

    this.setState({
      tempAnswer: "",
      isActive: sizeAnswer
    });

    setTimeout(() => {
      this.setState({
        [sizeAnswer]: answer
      } as Pick<ISumbitFearState, keyof ISumbitFearState>);
    }, 100);
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
