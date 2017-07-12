import React, { Component } from 'react'

/* ---------- COMPONENT ---------- */

class AllPuppies extends Component {

  componentDidMount() {
    const hardCodedData = [
      { id: 1, name: 'Cody' },
      { id: 2, name: 'Ben' },
      { id: 3, name: 'Bubba' }
    ]

    this.props.getAllPuppies(hardCodedData)
  }

  render() {
    return (
      <div>
        <ul className="list-unstyled">
          {
            this.props.allPuppies && this.props.allPuppies.map(puppy => {
              return (<li key={puppy.id}><a href="#">{puppy.name}</a></li>)
            })}
        </ul>
      </div>
    )
  }
}

/* ---------- CONTAINER ---------- */

import { connect } from 'react-redux'
import { getPuppies } from '../redux/reducer'

const mapStateToProps = (state) => {
  return {
    allPuppies: state.allPuppies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPuppies: function (puppies) {
      dispatch(getPuppies(puppies))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies)
