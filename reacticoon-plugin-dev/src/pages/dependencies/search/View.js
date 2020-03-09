import React from 'react'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits, Configure } from 'react-instantsearch-dom'

import { withStyles } from '@material-ui/core/styles'
import Section from 'reacticoon-plugin-dev/components/Section'
import SearchBox from 'reacticoon-plugin-dev/modules/algolia/view/SearchBox'
import Pagination from 'reacticoon-plugin-dev/modules/algolia/view/Pagination'
import SearchByAlgoiliaImg from 'reacticoon-plugin-dev/media/search_by_algolia.svg'

import DependencyRow from './view/DependencyRow'

const styles = theme => ({
  searchByAlgolia: {
    width: 160,
    marginTop: theme.spacing(4),
    float: 'right',
    marginRight: theme.spacing(2),
    background: '#fefefe',
    padding: theme.spacing(1),
  },
  SearchBox_root: {
    paddingRight: theme.spacing(4),
    marginLeft: theme.spacing(2),
  },
  hits: {
    marginTop: theme.spacing(4),
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
      <Section.Container>
        <Section>
          {/* TODO: make reacticoon propose some dependencies */}
          {/* <RecommandedView /> */}

          <div>
            <InstantSearch searchClient={this.searchClient} indexName="npm-search">
              <div>
                <Configure hitsPerPage={8} />
              </div>
              <div>
                <SearchBox classes={{ root: classes.SearchBox_root }} />
                <Hits hitComponent={DependencyRow} className={classes.hits} />
                <Pagination />
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
        </Section>
      </Section.Container>
    )
  }
}

export default withStyles(styles)(View)
