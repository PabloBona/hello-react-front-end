import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGreeting } from '../redux/slice';
import './greeting.css';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div className="container">
      <h1 className="greeting">{greeting}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  fetchGreeting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
