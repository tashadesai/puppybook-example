import React from 'react'
import { Link } from 'react-router-dom'

/* ---------- COMPONENT -------- */

class AllPuppies extends React.Component {

  componentDidMount() {
    this.props.getAllPuppies()
  }

  render() {
    return (
      <div>
        <ul className="list-unstyled">
          {
            this.props.allPuppies && this.props.allPuppies.map(puppy => {
              return (
                <li key={puppy.id}>
                  <Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

/* ---------- CONTAINER -------- */

import { connect } from 'react-redux'
import { getAllPuppies } from '../redux/allPuppies-actions'

const mapStateToProps = (state) => {
  return { allPuppies: state.allPuppies }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPuppies: () => {
      dispatch(getAllPuppies())
    }
  }
}

/*
aka SUUUPER-shorthand:

const mapDispatchtoProps = { getAllPuppies }

*/

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies)
