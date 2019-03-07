import * as React from "react";
import "../static/infoDialog.css";
import CloseInfoDialogBButton from "./CloseInfoDialogBButton";
import InfoDialogBPicture from "./InfoDialogBPicture";

interface IInfoDialogBProps {
  isShow: boolean;
  isShowing: boolean;
  isHiding: boolean;
  handleClick: () => void;
}

interface IInfoDialogBState {
  isShowDialogText: boolean;
}

class InfoDialogB extends React.Component<
  IInfoDialogBProps,
  IInfoDialogBState
> {
  constructor(props: IInfoDialogBProps) {
    super(props);
    this.state = {
      isShowDialogText: false
    };
  }

  public componentWillReceiveProps(nextProps: IInfoDialogBProps) {
    // props 要求顯示對話框時
    if (nextProps.isShowing && !this.props.isShowing) {
      // 1 秒後顯示對話框的文字
      setTimeout(() => {
        if (nextProps.isShowing) {
          this.setState({ isShowDialogText: true });
        }
      }, 1000);
    }

    // props 要求不顯示對話框時
    if (nextProps.isHiding && !this.props.isHiding) {
      // 0.5 秒後不顯示對話框的文字
      setTimeout(() => {
        if (nextProps.isHiding) {
          this.setState({ isShowDialogText: false });
        }
      }, 500);
    }
  }

  public render() {
    return (
      <div
        className={`info-dialog-wrapper
            ${this.props.isShow ? "isShow" : ""}
        `}
      >
        <div className="info-dialog-mask" />
        <div
          className={`info-dialog
            ${this.props.isShowing ? "isShowing" : ""}
            ${this.props.isHiding ? "isHiding" : ""}
        `}
        >
          <div className="info-dialog-title">恐懼是什麼？</div>
          <div className="info-dialog-content">
            <div className="info-dialog-content-item">
              <InfoDialogBPicture />
            </div>
            <div className="info-dialog-content-item">
              <div
                className={`info-dialog-text ${
                  this.state.isShowDialogText ? "isShow" : ""
                }`}
              >
                青山依舊在，幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢，浪花淘盡英雄。
                是非成敗轉頭空，滾滾長江東逝水，
                白髮漁樵江渚上，古今多少事，都付 笑談中。
                滾滾長江東逝水，浪花淘盡英雄。是 非成敗轉頭空
                青山依舊在，幾度夕陽紅。慣看秋月春
                風。一壺濁酒喜相逢，浪花淘盡英雄。
                是非成敗轉頭空，滾滾長江東逝水，
                白髮漁樵江渚上，古今多少事，都付
                笑談中青山依舊在，幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢，浪花淘盡英雄。
                是非成敗轉頭空，滾滾長江東逝水，
                白髮漁樵江渚上，古今多少事，都付 笑談中。
                滾滾長江東逝水，浪花淘盡英雄。是
                非成敗轉頭空青山依舊在，幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢，浪花淘盡英雄。
                是非成敗轉頭空，滾滾長江東逝水，
                白髮漁樵江渚上，古今多少事，都付 笑談中。
                滾滾長江東逝水，浪花淘盡英雄。是
                非成敗轉頭空青山依舊在，幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢，浪花淘盡英雄。
                是非成敗轉頭空，滾滾長江東逝水，
                白髮漁樵江渚上，古今多少事，都付 笑談中。
                滾滾長江東逝水，浪花淘盡英雄。是 非成敗轉頭空
              </div>
            </div>
          </div>
        </div>
        <CloseInfoDialogBButton
          isHiding={this.props.isHiding}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default InfoDialogB;
