import React, { Component } from "react";
import {format} from 'timeago.js'


export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>{format(this.props.time)}</span>
          </div>
        </div>
      </div>
    );
  }
}