import React, { Component } from "react";
import {format} from 'timeago.js'


export default class ChatItem extends Component {
  render() {
    return (
      <div
        className={`chat__item ${this.props.user ? '' : 'other'}`}
      >
        <div className={`chat__item__content ${this.props.user ? '' : 'other'}`}>
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>{format(this.props.time)}</span>
          </div>
        </div>
      </div>
    );
  }
}