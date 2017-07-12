import React, { Component } from 'react';

/* ----- COMPONENT ---- */

class SinglePuppy extends Component {

  componentDidMount() {
    const puppyId = this.props.match.params.puppyId
    this.props.getPuppy(puppyId);
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
