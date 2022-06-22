import React from 'react';

const Clicker = ({ amount, dispatch }) => (
  <div className="clickercontainer">
    <p>Capybara's at the Party: {amount}</p>
    <button
      className="capybarabutton"
      type="button"
      onClick={() => dispatch({ type: 'click' })}
    >
    </button>
  </div>
);

export default Clicker;