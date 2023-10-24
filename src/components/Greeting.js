import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../redux/actions';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <div>{greeting}</div>;
};

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);