import React from "react";

import InfoTable from "reacticoon-plugins/reacticoon-dev-plugin/src/components/TableInfo";

// TODO: data is the travis data for now, we should abstract the props.
const CiRepositoryView = ({ data }) => (
  <div>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    <InfoTable
      data={[
        {
          label: "status",
          value: <img src={data.buildSvg} />
        },
        {
          label: "last build number",
          value: data.repo.lastBuildNumber
        },
        {
          label: "active",
          value: data.repo.active ? "active" : "inactive"
        },
        {
          label: "slug",
          value: data.repo.slug
        },
        {
          label: "lastBuildDuration",
          value: data.repo.lastBuildDuration
        },
        {
          label: "lastBuildId",
          value: data.repo.lastBuildId
        },
        {
          label: "lastBuildState",
          value: data.repo.lastBuildState
        },
        {
          label: "id",
          value: data.repo.id
        },
        {
          label: "lastBuildStartedAt",
          value: data.repo.lastBuildStartedAt
        },
        {
          label: "description",
          value: data.repo.description
        },
        {
          label: "lastBuildFinishedAt",
          value: data.repo.lastBuildFinishedAt
        }
      ]}
    />
  </div>
);

export default CiRepositoryView;
