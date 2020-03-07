import React from 'react'

import { Highlight } from 'react-instantsearch-dom'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'reacticoon/routing'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const styles = theme => ({
  row: {
    display: 'flex',
    padding: theme.spacing(2),

    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
  icon: {
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(2),
  },
  header: {},
  name: {},
  metadata: {
    display: 'flex',
    alignItems: 'center',
  },
  versions: {
    color: theme.app.colors.lightblue,
    width: 170,
  },
  description: {},
  hidden: {
    display: 'none!important',
  },
  official: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    color: theme.app.colors.lightblue,

    '& svg': {
      paddingRight: theme.spacing(0.5),
      color: theme.app.colors.lightblue,
    },
  },
  installed: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    color: theme.app.colors.lightblue,
    '& svg': {
      paddingRight: theme.spacing(0.5),
      color: theme.app.colors.lightblue,
    },
  },
  homepage: {
    paddingLeft: theme.spacing(1),
    '& a': {
      display: 'flex',
      alignItems: 'center',
      color: theme.app.colors.lightblue,
      '& svg': {
        paddingRight: theme.spacing(0.5),
        color: theme.app.colors.lightblue,
      },
    },
  },
})

function DependencyRow({ hit: pkg, classes }) {
  const url = pkg.homepage || (pkg.repository && pkg.repository.url) || ''
  const iconUrl = `https://avatars.dicebear.com/v2/identicon/${pkg.name}.svg`

  return (
    <div className={classes.row}>
      <img className={classes.icon} src={iconUrl} />
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.name}>
            <Link to="REACTICOON_DEPENDENCY_DETAIL" params={{ dependencyName: pkg.name }} newTab>
              {pkg.name}
            </Link>
          </div>

          <div className={classes.description}>
            <Link to="REACTICOON_DEPENDENCY_DETAIL" params={{ dependencyName: pkg.name }} newTab>
              {pkg.description}
            </Link>
          </div>
        </div>

        <div className={classes.metadata}>
          <div className={classes.versions}>
            <span>version {pkg.version}</span>
          </div>
          {/* <div
            className={clsx(classes.official, {
              [classes.hidden]: !dependency.isOfficial
            })}
          >
            <StarIcon /> Official
          </div>
          <div
            className={clsx(classes.installed, {
              [classes.hidden]: !dependency.isInstalled
            })}
          >
            <CheckCircleIcon /> Installed
          </div> */}
          <div className={clsx(classes.homepage)}>
            <Link href={url} newTab>
              <OpenInNewIcon /> More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ;<div>
//   <a href={pkg.homepage || (pkg.repository && pkg.repository.url) || ''}>
//     {pkg.homepage || (pkg.repository && pkg.repository.url) || ''}
//   </a>
//   <div>
//     <Highlight attribute="name" hit={pkg.name} />
//   </div>

//   <span>{pkg.version}</span>

//   <div>
//     <Highlight attribute="description" hit={pkg.description} />
//   </div>

//   <span>
//     {/* TODO: download icon */}
//     <span>{pkg.humanDownloadsLast30Days}</span>
//   </span>
//   {pkg.owner && (
//     <span>
//       {/* TODO: account circle icon */}
//       <span>{pkg.owner.name}</span>
//     </span>
//   )}
// </div>

export default withStyles(styles)(DependencyRow)
