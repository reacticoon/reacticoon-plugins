import React from 'react'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits, Pagination, Configure } from 'react-instantsearch-dom'

import SearchBox from 'reacticoon-plugin-dev/modules/algolia/view/SearchBox'
import SearchByAlgoiliaImg from 'reacticoon-plugin-dev/media/search_by_algolia.svg'

import Hit from './view/Hit'

import { withStyles } from '@material-ui/core/styles'

// https://www.algolia.com/doc/api-reference/widgets/pagination/react/#html-output
const StyledPagination = withStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),

    '& .ais-Pagination-list': {
      display: 'flex',
      justifyContent: 'center',

      '& li': {
        marginRight: theme.spacing(0.5),
        color: 'white',

        '& .ais-Pagination-link': {
          background: theme.app.colors.block,
          padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        },
      },

      '& .ais-Pagination-item--selected': {
        '& .ais-Pagination-link': {
          background: `${theme.app.colors.lightblue}!important`,
        },
      },
      '& .ais-Pagination-item--disabled': {
        '& .ais-Pagination-link': {
          background: `${theme.app.colors.grey}!important`,
        },
      },
    },
  },
}))(({ classes }) => (
  <div className={classes.root}>
    <Pagination />
  </div>
))

const styles = theme => ({
  searchByAlgolia: {
    width: 200,
    marginTop: theme.spacing(4),
    float: 'right',
    marginRight: theme.spacing(2),
  },
  SearchBox_root: {
    paddingRight: theme.spacing(4),
    marginLeft: theme.spacing(2),
  },
})

class View extends React.Component {
  constructor(props) {
    super(props)

    //     app-id="OFCNCOG2CU"
    //     api-key="db283631f89b5b8a10707311f911fd00"
    //     index-name="npm-search"
    //     :query-parameters="{
    //       hitsPerPage: pageSize,
    //       attributesToRetrieve: [
    //         'name',
    //         'description',
    //         'repository',
    //         'homepage',
    //         'version',
    //         'owner',
    //         'humanDownloadsLast30Days',
    //         'keywords'
    //       ],
    //       attributesToHighlight: [
    //         'name',
    //         'description'
    //       ],
    //       analyticsTags: [
    //         'vue-cli-ui'
    //       ],
    //       filters
    //     }"

    this.searchClient = algoliasearch('OFCNCOG2CU', 'db283631f89b5b8a10707311f911fd00')
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        {/* TODO: make reacticoon propose some dependencies */}
        {/* <RecommandedView /> */}

        <div>
          <InstantSearch searchClient={this.searchClient} indexName="npm-search">
            <div>
              <Configure hitsPerPage={8} />
            </div>
            <div>
              <SearchBox classes={{ root: classes.SearchBox_root }} />
              <Hits hitComponent={Hit} />
              <StyledPagination />
            </div>
          </InstantSearch>
        </div>

        <div>
          <img
            src={SearchByAlgoiliaImg}
            alt="Search by algolia"
            className={classes.searchByAlgolia}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(View)
