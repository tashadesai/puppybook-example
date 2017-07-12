import React from 'react';

/* ---------- COMPONENT -------- */

class AllPuppies extends React.Component {

  componentDidMount() {
    // const hardCodedData = [
    //   { id: 1, name: 'Cody' },
    //   { id: 2, name: 'Ben' },
    //   { id: 3, name: 'Bubba' }
    // ];

    this.props.getAllPuppies();
  }

  render() {
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div>
            <ul className="list-unstyled">
              {
                this.props.allPuppies && this.props.allPuppies.map(puppy => {
                  return (<li key={puppy.id}><a href="#">{puppy.name}</a></li>);
                })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

/* ---------- CONTAINER -------- */

import { connect } from 'react-redux';
import { getAllPuppies } from '../redux/action-creators';

const mapStateToProps = (state) => {
  return { allPuppies: state.allPuppies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPuppies: () => {
      dispatch(getAllPuppies())
    }
  };
};

/*
aka SUUUPER-shorthand:

const mapDispatchtoProps = {getAllPuppies}

          */

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies);
