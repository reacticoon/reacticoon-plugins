import React from "react";

import isEmpty from "lodash/isEmpty";
import { addListener } from "../config";

const formatPayload = payload => {
  payload.isTypeError = payload.type === "error";
  payload.isTypeLog = payload.type === "log";
  payload.isTypeDone = payload.type === "done";

  payload.hasTaskId = !isEmpty(payload.taskId);

  return payload;
};

class SseMessagesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    addListener(props.eventName, this.handleEvent);
  }

  handleEvent = eventData => {
    const props = this.props;
    const payload = formatPayload(eventData.payload);

    if (props.taskId && payload.hasTaskId && payload.taskId !== props.taskId) {
      return;
    }

    if (payload.isTypeDone) {
      // TODO: remove listener, notify prop if needed
    }

    this.setState({
      events: [...this.state.events, payload]
    });
  };

  render() {
    const { children } = this.props;
    const { events } = this.state;

    return children({
      events
    });
  }
}

export default SseMessagesContainer;
