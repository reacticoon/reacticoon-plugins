import React from "react";
import InfoTable from "reacticoon-plugins/reacticoon-plugin-dev/src/components/TableInfo";

const GitInfo = ({ info }) => (
  <div>
    {/* <pre>{JSON.stringify(info, null, 2)}</pre> */}
    <InfoTable
      data={[
        {
          label: "currentBranch",
          value: info.currentBranch
        },
        {
          label: "fullName",
          value: info.fullName
        },
        {
          label: "projectName",
          value: info.projectName
        },
        {
          label: "organization",
          value: info.organization
        }
      ]}
    />

    <h2>Last commit</h2>
    <InfoTable
      data={[
        {
          label: "author",
          value: info.lastCommit.author
        },
        {
          label: "date",
          value: info.lastCommit.date
        },
        {
          label: "commitId",
          value: info.lastCommit.commitId
        },
        {
          label: "message",
          value: info.lastCommit.message
        }
      ]}
    />
  </div>
);

export default GitInfo;
