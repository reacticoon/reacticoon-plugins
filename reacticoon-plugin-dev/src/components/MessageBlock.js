import React from "react";

import { withStyles } from "@material-ui/core/styles";

const MessageBlock = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}))(
  ({ show = true, children, classes, ...props }) =>
    show && (
      <div className={classes.root} {...props}>
        {children}
      </div>
    )
);

MessageBlock.Info = withStyles(theme => ({
  root: {
    background: theme.palette.info.main
  }
}))(({ children, ...props }) => (
  <MessageBlock {...props}>
    <React.Fragment>{children}</React.Fragment>
  </MessageBlock>
));

MessageBlock.Warning = withStyles(theme => ({
  root: {
    background: theme.palette.warning.main
  }
}))(({ children, ...props }) => (
  <MessageBlock {...props}>
    <React.Fragment>{children}</React.Fragment>
  </MessageBlock>
));

MessageBlock.Error = withStyles(theme => ({
  root: {
    background: theme.palette.error.main
  }
}))(({ children, ...props }) => (
  <MessageBlock {...props}>
    <React.Fragment>{children}</React.Fragment>
  </MessageBlock>
));

export default MessageBlock;
