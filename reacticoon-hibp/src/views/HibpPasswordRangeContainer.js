import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'
import debounce from 'lodash/debounce'
import find from 'lodash/find'
import pwnedPasswordRange from 'hibp/lib/pwnedPasswordRange'
import sha1 from '../utils/sha1'

/**
 * see https://haveibeenpwned.com/API/v2#SearchingPwnedPasswordsByRange
 */
class HibpPasswordRangeContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPwned: false,
      count: 0,
      isFetching: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.password !== this.props.password) {
      this.check(this.props.password)
    }
  }

  check = debounce(password => {
    if (isEmpty(password) || password.length < this.props.minLength) {
      this.setState({
        isPwned: false,
        count: 0,
        isFetching: false,
      })
      return
    }

    const shaValue = sha1.hash(password)
    const prefix = shaValue.substring(0, 5).toUpperCase()
    const suffix = shaValue.substring(5).toUpperCase()

    this.setState({
      isFetching: true,
    })

    pwnedPasswordRange(prefix).then(results => {
      const pwdData = find(results, data => data.suffix === suffix)

      const isPwned = pwdData !== undefined

      this.setState({
        isPwned,
        count: isPwned ? pwdData.count : 0,
        isFetching: false,
      })
    })
  }, 300)

  render() {
    const { children } = this.props
    const { isPwned, count, isFetching } = this.state

    return children({
      isPwned,
      count,
      isFetching,
    })
  }
}

HibpPasswordRangeContainer.defaultProps = {
  minLength: 4,
}

HibpPasswordRangeContainer.propTypes = {
  children: PropTypes.func.isRequired,

  password: PropTypes.string,

  /**
   * min length after which we begin to test the password
   */
  minLength: PropTypes.number,
}

export default HibpPasswordRangeContainer
