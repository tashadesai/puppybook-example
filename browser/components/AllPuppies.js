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
                  <Link
                    to={`/${puppy.id}`}
                    onClick={() => this.props.getPuppy(puppy.id)}
                  >
                    {puppy.name}
                  </Link>
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
import { getPuppy } from '../redux/singlePuppy-actions'

const mapStateToProps = (state) => {
  return { allPuppies: state.allPuppies }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPuppies: () => {
      dispatch(getAllPuppies())
    },
    getPuppy: (puppyId) => {
      dispatch(getPuppy(puppyId))
    }
  }
}

/*
aka SUUUPER-shorthand:

const mapDispatchtoProps = { getAllPuppies, getPuppy }

*/

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies)
