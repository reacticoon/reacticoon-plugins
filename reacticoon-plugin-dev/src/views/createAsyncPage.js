import React from "react";
import { createLoadable } from "reacticoon/view";

const createAsyncPage = (loader, loadingView) =>
  createLoadable(loader, () => (loadingView ? loadingView : <div />));

export default createAsyncPage;
