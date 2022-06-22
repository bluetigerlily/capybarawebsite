import React, { useState } from 'react';

const Clicker = () => {
  const [count, setCount] = useState(0);
  
  return (
  <div className="clickercontainer">
    <p>Capys'Bacardi'd: {count}</p>
    
    <div
      className="capybarabutton box"
      onClick={() => setCount(count+1)}
    >
    </div>

  </div>
  );
  };

export default Clicker;