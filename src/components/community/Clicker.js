import React from 'react';

const Clicker = ({ amount, dispatch }) => (
  <div className="clickercontainer">
    <p>Capys'Bacardi'd: {amount}</p>
    <div
      className="capybarabutton"
      type="button"
      onClick={() => dispatch({ type: 'click' })}
    >
    </div>
  </div>
);

export default Clicker;