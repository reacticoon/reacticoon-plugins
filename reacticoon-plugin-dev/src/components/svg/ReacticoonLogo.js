import React from "react";

import logo from "./logo.svg";

const ReacticoonLogo = ({ size = 20, height = 20, ...props }) => (
  <img src={logo} height={height || size} {...props} />
);

export default ReacticoonLogo;
