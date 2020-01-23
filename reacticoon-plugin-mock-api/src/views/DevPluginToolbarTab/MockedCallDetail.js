import React from "react";

import JsonView from "reacticoon-plugin-dev/components/JsonView";

const MockedCallDetail = ({ mockedCall }) => (
  <div>
    <div>
      [{mockedCall.request.type}] {mockedCall.request.formattedEndpoint}
    </div>
    <JsonView json={mockedCall} />
  </div>
);

export default MockedCallDetail;
