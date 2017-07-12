import React, { Component } from 'react';

/* ----- COMPONENT ---- */

class SinglePuppy extends Component {

  componentDidMount() {
    // const hardCodedData = [
    //   { id: 1, name: 'Cody' },
    //   { id: 2, name: 'Ben' },
    //   { id: 3, name: 'Bubba' }
    // ];

    const puppyId = this.props.match.params.puppyId
    this.props.getPuppy(puppyId);
  }

  render () {
    return (
      <div>
        <h2>PUPPY NAME GOES HERE</h2>
        <div>
          <img src="http://placehold.it/400x400" />
        </div>
      </div>
    )
  }
}
/* ---------- CONTAINER -------- */

import { connect } from 'react-redux';
import { getPuppy } from '../redux/singlepuppy-actions';

const mapStateToProps = (state) => {
  return { allPuppies: state.allPuppies };
};

const mapDispatchToProps = { getPuppy }

export default connect(mapStateToProps, mapDispatchToProps)(SinglePuppy);


/*

Approaches

1) Do a props.match to the URL id param
2) Search through all puppies for an ID that matches that
3) mapStatetoProps

1) Separate action creators file for single puppies and do the thunk in there


*/
