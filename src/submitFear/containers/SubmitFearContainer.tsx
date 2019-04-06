import * as React from "react";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import { connect } from "react-redux";
import SumbitFear from "../components/SubmitFear";
import {
  setSmallAnswerAction,
  setTempAnswerAction,
  setLargeAnswerAction,
  setMediumAnswerAction,
  setIsSubmitFearLoadingAction,
  setIsShowSubmitAnimationAction
} from "../SubmitFearAction";
import backgroundImage from "../static/submit_fear_background.png";

// Initialize Firebase
import * as firebase from "firebase";
import { firebaseConfig } from "../../config";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database().ref();
const fearAnswersDb = db.child("/fearAnswers");

export interface ISizeAnswer {
  smallAnswer: string;
  mediumAnswer: string;
  largeAnswer: string;
}

interface ISumbitFearContainerProps extends ISumbitFearStateProps {
  dispatch: Dispatch;
}

interface ISumbitFearStateProps extends ISizeAnswer {
  isLoading: boolean;
  tempAnswer: string;
}

const mapStateToProps = (state: IAppState): ISumbitFearStateProps => ({
  isLoading: state.submitFearState.isLoading,
  smallAnswer: state.submitFearState.smallAnswer,
  mediumAnswer: state.submitFearState.mediumAnswer,
  largeAnswer: state.submitFearState.largeAnswer,
  tempAnswer: state.submitFearState.tempAnswer
});

class SumbitFearContainer extends React.Component<ISumbitFearContainerProps> {
  private image = new Image();

  constructor(props: ISumbitFearContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.changeTempAnswer = this.changeTempAnswer.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  public componentDidMount() {
    this.image.src = backgroundImage;
    this.image.onload = this.handleImageLoaded;
    this.getAnswers();
  }

  public render() {
    if (
      this.props.isLoading === false &&
      this.props.smallAnswer !== "" &&
      this.props.mediumAnswer !== "" &&
      this.props.largeAnswer !== ""
    ) {
      return (
        <SumbitFear
          smallAnswer={this.props.smallAnswer}
          mediumAnswer={this.props.mediumAnswer}
          largeAnswer={this.props.largeAnswer}
          tempAnswer={this.props.tempAnswer}
          changeTempAnswer={this.changeTempAnswer}
          submitAnswer={this.submitAnswer}
        />
      );
    }
    return "loading...";
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsSubmitFearLoadingAction(false));
  }

  private async getAnswers() {
    const smallAnswer: string = await this.getAnswer("smallAnswer");
    this.changeAnswer("smallAnswer", smallAnswer);
    const mediumAnswer: string = await this.getAnswer("mediumAnswer");
    this.changeAnswer("mediumAnswer", mediumAnswer);
    const largeAnswer: string = await this.getAnswer("largeAnswer");
    this.changeAnswer("largeAnswer", largeAnswer);
  }

  private async getAnswer(sizeAnswer: keyof ISizeAnswer): Promise<string> {
    try {
      const answers = await fearAnswersDb
        .child(`/${sizeAnswer}`)
        .once("value")
        .then(snapshot => {
          const tempAnswers: string[] = [];

          snapshot.forEach(childSnapshot => {
            tempAnswers.push(childSnapshot.val().answer);
          });

          return tempAnswers;
        });

      const randomNumber = Math.floor(Math.random() * answers.length);
      return answers[randomNumber];
    } catch {
      throw new Error("資料庫錯誤");
    }
  }

  private changeTempAnswer(tempAnswer: string): void {
    this.props.dispatch(setTempAnswerAction(tempAnswer));
  }

  private changeAnswer(sizeAnswer: keyof ISizeAnswer, answer: string): void {
    if (sizeAnswer === "smallAnswer") {
      this.props.dispatch(setSmallAnswerAction(answer));
    } else if (sizeAnswer === "mediumAnswer") {
      this.props.dispatch(setMediumAnswerAction(answer));
    } else if (sizeAnswer === "largeAnswer") {
      this.props.dispatch(setLargeAnswerAction(answer));
    }
  }

  private submitAnswer(sizeAnswer: keyof ISizeAnswer, answer: string): void {
    const timeStamp = new Date().getTime();

    fearAnswersDb.child(`/${sizeAnswer}`).push({
      answer,
      create_time: timeStamp
    });

    this.props.dispatch(setIsShowSubmitAnimationAction(true));

    setTimeout(() => {
      this.changeAnswer(sizeAnswer, answer);
    }, 150);
  }
}

const ConnectedStoryE = connect(mapStateToProps)(SumbitFearContainer);

export default ConnectedStoryE;
