import React from 'react';
import { connect } from 'react-redux';
import buyCandy from '../redux/candy/candyActions';

function CandyContainer(props) {
  return (
    <div>
      <h2>No of Candy - {props.numOfCandy}</h2>
      <button onClick={props.buyCandy}>Buy Candy</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCandy: state.candy.numOfCandy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCandy: () => dispatch(buyCandy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer);
