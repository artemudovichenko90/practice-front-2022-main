import React from 'react';
import { connect } from 'react-redux';
import { onlyForNotAuthorize } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const withNotAuthorized = (Component) => {
  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: (data) => dispatch(onlyForNotAuthorize(data)),
  });

  class withLoginSignUp extends React.Component {
    componentDidMount() {
      this.props.checkAuth(this.props.history.replace);
    }

    render() {
      if (this.props.isFetching) {
        return <Spinner mtop />;
      } if (!this.props.data) {
        return <Component history={this.props.history} />;
      }
      return null;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withLoginSignUp);
};

export default withNotAuthorized;
