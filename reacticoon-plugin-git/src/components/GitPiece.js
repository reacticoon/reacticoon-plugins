import React from "react";

import { withStyles } from "@material-ui/core/styles";
import CommandContainer from "reacticoon-plugins/reacticoon-dev-plugin/src/modules/command/view/CommandContainer";
import GitIcon from "./GitIcon";
import Piece from "reacticoon-plugins/reacticoon-dev-plugin/src/components/Piece";

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 6,
    display: "flex",
    alignItems: "center"
  }
});

// TODO: handle if git not initiated.
// TODO: move to git plugin
const GitPiece = ({ classes }) => (
  <CommandContainer command="DEV_TOOLS::GIT_INFO">
    {({ data }) =>
      data.isGitInit && (
        <Piece name="git">
          <Piece.Header>
            <GitIcon />
            &nbsp;{data.currentBranch}
          </Piece.Header>

          <Piece.Content>
            {() => [
              {
                label: "date",
                value: data.lastCommit.date
              },
              { label: "Author", value: data.lastCommit.author },
              { label: "commit", value: data.lastCommit.message },
              { label: "#", value: data.lastCommit.commitId }
            ]}
          </Piece.Content>
        </Piece>
      )
    }
  </CommandContainer>
);

export default withStyles(styles)(GitPiece);
