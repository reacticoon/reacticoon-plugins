import React from "react";

import JsonView from "reacticoon-plugins/reacticoon-plugin-dev/src/components/JsonView";

const MockedCallDetail = ({ mockedCall }) => (
  <div>
    <div>
      [{mockedCall.request.type}] {mockedCall.request.formattedEndpoint}
    </div>
    <JsonView json={mockedCall} />
  </div>
);

export default MockedCallDetail;
