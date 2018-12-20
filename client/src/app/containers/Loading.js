import { connect } from 'react-redux';
import { loading } from '../actions';
import Loading from '../components/shared/Loading';

const mapStateToProps = ({ common }) => ({
  show: common.loading,
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Loading);
