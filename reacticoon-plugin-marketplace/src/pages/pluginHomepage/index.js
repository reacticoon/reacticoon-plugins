import React from "react";

import Page from "reacticoon-plugin-dev/components/Page";
import ReadmeView from "./view/ReadmeView";
import Section from "reacticoon-plugin-dev/components/Section";
import LaunchEditorButton from "reacticoon-plugin-dev/components/LaunchEditorButton";
import CommandContainer from "reacticoon-plugin-dev/modules/command/view/CommandContainer";
import Typography from "@material-ui/core/Typography";

class PluginsPage extends React.Component {
  render() {
    const props = this.props;

    return (
      <CommandContainer
        command="PLUGIN"
        payload={{ pluginId: props.params.pluginId }}
      >
        {({ data: plugin }) => (
          <Page pageTitle={`Plugin - Detail`}>
            <Section.Container>
              <Section title="Info">
                <Typography variant="h3">{plugin.name}</Typography>

                <Typography>{plugin.description}</Typography>
              </Section>

              {plugin.hasReadme && (
                <Section title="README">
                  <ReadmeView plugin={plugin} />
                </Section>
              )}

              <LaunchEditorButton src={`${plugin.resolve}`} />
            </Section.Container>
          </Page>
        )}
      </CommandContainer>
    );
  }
}

export default PluginsPage;
