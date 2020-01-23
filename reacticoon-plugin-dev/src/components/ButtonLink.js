import React from "react";
import PropTypes from "prop-types";

import { Link, getRoute } from "reacticoon/routing";
import Button from "@material-ui/core/Button";

/**
 * Component that combine a Button and a Link
 * See https://material-ui-next.com/demos/buttons/#third-party-routing-library
 */
const ButtonLink = ({
  to,
  params,
  query,
  newTab,
  children,
  target,
  href,
  ...otherProps
}) =>
  href ? (
    <Button
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      component="a"
      href={href}
      target={newTab ? "_blank" : target}
      {...otherProps}
    >
      {children}
    </Button>
  ) : (
    <Button
      // pass Link like this and not like <Link ... />, to avoid some problems: clicking on the link
      // was redirecting but by loading the page instead of just pushing in history.
      component={Link}
      to={to}
      params={params}
      query={query}
      target={newTab ? "_blank" : target}
      {...otherProps}
    >
      {children}
    </Button>
  );

ButtonLink.getRoute = getRoute;

ButtonLink.defaultProps = {
  newTab: false,
  variant: "contained",
  color: "primary"
};

ButtonLink.propTypes = {
  to: PropTypes.object,

  params: PropTypes.object,

  query: PropTypes.object,

  /**
   * true if the link must be opened in a new tab
   */
  newTab: PropTypes.bool
};

export default ButtonLink;
