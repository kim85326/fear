import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "src/app/AppReducer";
import RabbitCity from "../components/RabbitCity";
import backgroundImage from "../static/rabbit_city_background.png";
import {
  setIsRabbitCityLoadingAction,
  setIsShowDialogLAction,
  setIsShowDialogMAction,
  setIsShowDialogNAction,
  setIsShowDialogOAction
} from "../RabbitCityAction";
import Loading from "src/common/loading/components/Loading";

interface IRabbitCityContainerProps extends IRabbitCityStateProps {
  dispatch: Dispatch;
}

interface IRabbitCityStateProps {
  isLoading: boolean;
}

const mapStateToProps = (state: IAppState): IRabbitCityStateProps => ({
  isLoading: state.rabbitCityState.isLoading
});

class RabbitCityContainer extends React.Component<IRabbitCityContainerProps> {
  private image = new Image();

  constructor(props: IRabbitCityContainerProps) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  public componentDidMount() {
    this.image.src = backgroundImage;
    this.image.onload = this.handleImageLoaded;
  }

  public componentDidUpdate(prevProps: IRabbitCityContainerProps) {
    // 圖片載入後
    if (!this.props.isLoading && prevProps.isLoading) {
      this.props.dispatch(setIsShowDialogLAction(true));
      this.props.dispatch(setIsShowDialogMAction(true));
      this.props.dispatch(setIsShowDialogNAction(true));
      this.props.dispatch(setIsShowDialogOAction(true));
    }
  }

  public render() {
    return this.props.isLoading ? <Loading /> : <RabbitCity />;
  }

  private handleImageLoaded() {
    this.props.dispatch(setIsRabbitCityLoadingAction(false));
  }
}

const ConnectedRabbitCity = connect(mapStateToProps)(RabbitCityContainer);

export default ConnectedRabbitCity;
