import React from "react";

import isEmpty from "lodash/isEmpty";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import SseMessagesContainer from "./SseMessagesContainer";

const styles = theme => ({
  root: {
    background: "black",
    color: "white",
    padding: theme.spacing(1),
    lineHeight: "21px",
    font: `1rem Inconsolata, monospace`
  },
  log: {},
  error: {
    color: theme.app.colors.error
  }
});

const SseLogViewer = ({ eventName, taskId, classes }) => (
  <SseMessagesContainer eventName={eventName} taskId={taskId}>
    {({ events }) =>
      !isEmpty(events) && (
        <pre className={classes.root}>
          {events.map((event, index) => (
            <div
              key={index}
              className={clsx({
                [classes.log]: event.isTypeLog,
                [classes.error]: event.isTypeError
              })}
            >
              {event.message}
            </div>
          ))}
        </pre>
      )
    }
  </SseMessagesContainer>
);

export default withStyles(styles)(SseLogViewer);
