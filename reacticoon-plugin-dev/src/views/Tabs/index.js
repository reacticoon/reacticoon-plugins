import React from "react";

import { StateContainer } from "reacticoon/view";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// https://codesandbox.io/s/n9ww0pq7p4
const VerticalTabs = withStyles(theme => ({
  root: {
    background: theme.app.colors.dark
  },
  flexContainer: {
    flexDirection: "column"
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const VerticalTab = withStyles(theme => ({
  root: {
    color: "white",
    textAlign: "left"
  },
  wrapper: {
    display: "block",
    paddingLeft: theme.spacing(2)
  },
  selected: {
    background: `rgba(66, 185, 131, 0.05) !important`,

    color: `${theme.palette.secondary.main}!important`,

    borderRight: `2px solid ${theme.palette.secondary.main}`
  }
}))(Tab);

class ReacticoonTabs extends React.Component {
  render() {
    const { vertical, tabsViewClasses } = this.props;

    const TabsView = vertical ? VerticalTabs : Tabs;
    const TabView = vertical ? VerticalTab : Tab;

    return (
      <StateContainer
        defaultState={{
          tab: this.props.defaultTab || 0,
          renderedTabs: { [this.props.defaultTab]: true }
        }}
      >
        {({ state, setState }) => (
          <React.Fragment>
            <TabsView
              value={state.tab}
              onChange={(e, value) => {
                setState({
                  tab: value,
                  renderedTabs: { ...state.renderedTabs, [value]: true }
                });
              }}
              classes={tabsViewClasses}
            >
              {this.props.tabs.map((tabInfo, index) => (
                <TabView key={index} label={tabInfo.label} />
              ))}
            </TabsView>

            <section
              component="div"
              style={{ padding: 8 * 3 }}
              className={tabsViewClasses.content}
            >
              {this.props.content.map((tabContent, index) =>
                // optimisation: we render onlythe tab that alreay had been render. allows to keep
                // tab content if visited, but increase perfs to not render all the tabs contents
                !state.renderedTabs[state.tab] ? null : (
                  // only hide not current tab, since we do not want to reset the tab state when switching tabs
                  <div
                    key={index}
                    style={{ display: index !== state.tab ? "none" : "block" }}
                  >
                    {tabContent}
                  </div>
                )
              )}
            </section>
          </React.Fragment>
        )}
      </StateContainer>
    );
  }
}

export default ReacticoonTabs;
