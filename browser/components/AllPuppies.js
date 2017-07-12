import React from 'react'
import { Link } from 'react-router-dom'

/* ---------- COMPONENT -------- */

class AllPuppies extends React.Component {

  //Bonus: How could we "fill the store" with puppies WITHOUT using a componentDidMount on this component? Where else could we call getPuppies()?
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

/*
aka SUUUPER-shorthand:

const mapStateToProps = (state) => ({ allPuppies: state.allPuppies })

*/

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
