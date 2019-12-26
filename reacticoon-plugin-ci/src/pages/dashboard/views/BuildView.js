import React from "react";

import InfoTable from "reacticoon-plugins/reacticoon-dev-plugin/src/components/TableInfo";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";

const BuildView = ({ ownerName, repoName, buildId }) =>
  !buildId ? (
    <p>No build</p>
  ) : (
    <CommandContainer
      id={buildId}
      command="CI::BUILD::INFOS"
      payload={{
        buildId,
        ownerName,
        repoName
      }}
    >
      {({ data }) => (
        <div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <InfoTable
            data={[
              { label: "build url", value: data.build.buildUrl },
              { label: "finishedAt", value: data.build.finishedAt },
              { label: "repositoryId", value: data.build.repositoryId },
              { label: "number", value: data.build.number },
              { label: "pullRequest", value: data.build.pullRequest },
              { label: "pullRequestTitle", value: data.build.pullRequestTitle },
              { label: "state", value: data.build.state },
              { label: "commitId", value: data.build.commitId },
              {
                label: "pullRequestNumber",
                value: data.build.pullRequestNumber
              },
              { label: "startedAt", value: data.build.startedAt },
              { label: "eventType", value: data.build.eventType },
              { label: "duration", value: data.build.duration },
              { label: "id", value: data.build.id },
              { label: "jobIds", value: data.build.jobIds }
            ]}
          />

          <InfoTable
            data={[
              { label: "branch", value: data.commit.branch },
              { label: "message", value: data.commit.message },
              { label: "compareUrl", value: data.commit.compareUrl },
              { label: "sha", value: data.commit.sha },
              { label: "committedAt", value: data.commit.committedAt },
              { label: "authorEmail", value: data.commit.authorEmail },
              { label: "committerEmail", value: data.commit.committerEmail },
              { label: "committerName", value: data.commit.committerName },
              { label: "branchIsDefault", value: data.commit.branchIsDefault },
              { label: "authorName", value: data.commit.authorName },
              { label: "tag", value: data.commit.tag },
              { label: "id", value: data.commit.id }
            ]}
          />

          {data.jobs.forEach(job => (
            <InfoTable
              data={[
                { finishedAt: job.finishedAt },
                { repositoryId: job.repositoryId },
                { buildId: job.buildId },
                { number: job.number },
                { state: job.state },
                { queue: job.queue },
                { commitId: job.commitId },
                { startedAt: job.startedAt },
                { tags: job.tags },
                { id: job.id }
              ]}
            />
          ))}
        </div>
      )}
    </CommandContainer>
  );

export default BuildView;
