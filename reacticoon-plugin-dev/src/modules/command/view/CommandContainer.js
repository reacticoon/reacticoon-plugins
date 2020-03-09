import React, { Component } from 'react'

import withModule from 'reacticoon/module/withModule'
import LoadingContainer from 'reacticoon/view/LoadingContainer'
import ErrorBlock from 'reacticoon/view/ErrorBlock'

class CommandContainer extends Component {
  constructor(props) {
    super(props)

    if (!props.manualRun) {
      this.runCommand()
    }
  }

  runCommand = () => {
    this.props.runCommand(this.props.id, this.props.command, {
      queryParams: this.props.queryParams,
      payload: this.props.payload,
    })
  }

  render() {
    const { data, isPending, error, request, children } = this.props

    return children({
      data,
      isPending,
      error,
      request,
      runCommand: this.runCommand,
    })
  }
}

const Container = withModule(
  'CommandModule',
  [
    {
      isPending: 'makeIsPendingCommandData',
      data: 'makeGetCommandData',
      error: 'makeGetCommandError',
      request: 'makeGetRequest',
    },
    'runCommand',
    {
      // default props here so mapStateToProps has default props too
      defaultProps: {
        // allow to define an id to run multiple time the same command for different data.
        id: '_',
        payload: null,
        queryPrams: {},
      },
    },
  ],
  () => import(/*  webpackChunkName: "reacticoon-plugin-dev__CommandModule" */ '../index'),
  <div />
)(CommandContainer)

export default ({ children, manualRun, formatter, ...props }) => (
  <LoadingContainer
    container={<Container manualRun={manualRun} {...props} formatter={formatter} />}
    show={({ data, isPending, error }) => !manualRun && (isPending || (!data && !error))}
  >
    {({ data, isPending, runCommand, error }) => (
      <React.Fragment>
        {error ? (
          error.code === 'NO_INTERNET' ? (
            <div>The development server is not running. Learn more. TODO: link to doc</div>
          ) : (
            <ErrorBlock error={error} />
          )
        ) : (
          children({
            data,
            isPending,
            runCommand,
          })
        )}
      </React.Fragment>
    )}
  </LoadingContainer>
)
