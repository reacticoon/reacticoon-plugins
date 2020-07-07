import React from 'react'
import { createPlugin } from "reacticoon/plugin";

import { Helmet as HelmetLib } from "react-helmet";

export const Helmet = ({ children }) => (
  <HelmetLib>
    {/* TODO: add meta from config (description etc) */}
    <meta charSet="utf-8" />
    {children}
  </HelmetLib>
)

//
//
//
const ReacticoonPluginHelmet = createPlugin({
  name: "reacticoon-plugin-hibp",
  modules: []
});

export default ReacticoonPluginHelmet;
