import React from 'react';

/**
* see https://github.com/sm-react/react-theme-provider
* @type {Object}
*/

const propTypes = {
  setCSS: React.PropTypes.func,
  CSSLink: React.PropTypes.func,
  themes: React.PropTypes.arrayOf(React.PropTypes.object),
  themeInd: React.PropTypes.number,
  override: React.PropTypes.bool,
  className: React.PropTypes.string,
};

const defaultProps = {
  themeInd: 0,
  themes: [],
}

const contextTypes = {
  muiTheme: React.PropTypes.object,
};

const childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default class ThemeProvider extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);

    //        this.state = {
    //            themeInd: props.themeInd || 0,
    //        };
    //        this.state.currentTheme = props.themes[props.themeInd];

    this.setCSS = props.setCSS || setCSS;
    this.CSSLink = props.CSSLink || CSSLink;
    this.className = props.className || 'theme';
  }

  getChildContext() {
    if (this.context.muiTheme && !this.props.override) {
      return;
    }
    return {muiTheme: this.props.themes[this.props.themeInd]};
  }

  render() {

    const currentTheme = this.context.muiTheme ? this.context.muiTheme : this.props.themes[this.props.themeInd];
    const palette = currentTheme.palette;

    //        const palette = this.context.muiTheme ? this.context.muiTheme.palette : this.state.currentTheme.palette;

    const CSSstyles = this.setCSS(palette, this.className);

    return (
      <div className={this.className}>
        {this.CSSLink(CSSstyles)}
        <div>{this.props.children}</div>
      </div>
    );
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;
ThemeProvider.contextTypes = contextTypes;
ThemeProvider.childContextTypes = childContextTypes;

function setCSS(palette, className) {
  const style = `
  .${className}::selection {
    background: ${palette.primary2Color} !important;
  }

  .linkPrimary {
    color: ${palette.primary1Color} !important;
  }

  .colorPrimary {
    color: ${palette.primary1Color} !important;
  }

  .backgroundPrimary {
    background: ${palette.primary1Color} !important;
  }

  .hoverPrimary:hover {
    color: ${palette.primary1Color} !important;
  }

  .visitedPrimary:visited {
    color: ${palette.primary1Color} !important;
  }

  .borderPrimary {
    border-color: ${palette.primary1Color} !important
  }

  /* Bookmark content theme */

  .bookmark_content h1, .bookmark_content h2, .bookmark_content h3 {
    color: ${palette.primary1Color} !important
  }
  `;
  return style;
}

function CSSLink(CSSdata) {
  return (
    <link
      rel="stylesheet"
      type="text/css"
      href={`data:text/css,${CSSdata}`}
    />
  );
}
