import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { getPuppies } from './action-creators';

const mapStateToProps = (state) => {
  return { allPuppies: state.allPuppies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPuppies: function(puppies) {
      dispatch(getPuppies(puppies));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies);
