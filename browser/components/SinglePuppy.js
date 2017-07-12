import React, { Component } from 'react';

/* ----- COMPONENT ---- */

class SinglePuppy extends Component {

  componentDidMount() {
    //Note this check in the componentDidMount. Ask yourself: Why is it used here? Hint: When is it important for the SinglePuppy component to run getPuppy, and when it is not?
    if (!this.props.chosenPuppy.keys) {
      const puppyId = this.props.match.params.puppyId
      this.props.getPuppy(puppyId);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.chosenPuppy.name}</h2>
        <div>
          <img src={this.props.chosenPuppy.image} />
        </div>
      </div>
    )
  }
}
/* ---------- CONTAINER -------- */

import { connect } from 'react-redux';
import { getPuppy } from '../redux/singlePuppy-actions';

const mapStateToProps = (state) => ({ chosenPuppy: state.chosenPuppy })

const mapDispatchToProps = { getPuppy }

export default connect(mapStateToProps, mapDispatchToProps)(SinglePuppy);
