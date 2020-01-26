import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const getCircularSizeForButtonSize = size => {
  switch (size) {
    case "small":
      return 16;

    default:
      return 24;
  }
};

const LoadingButton = ({
  isLoading,
  loadingText,
  size,
  children,
  disabled,
  startIcon,
  ...props
}) => (
  <Button
    {...props}
    startIcon={
      isLoading ? (
        <CircularProgress
          size={getCircularSizeForButtonSize(size)}
          style={{ color: "inherit" }}
        />
      ) : (
        startIcon
      )
    }
    disabled={disabled || isLoading}
    size={size}
  >
    {loadingText && isLoading ? loadingText : children}
  </Button>
);

export default LoadingButton;
