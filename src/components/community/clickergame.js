import React, { useEffect, useRef, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import Clicker from './Clicker';

const ClickerGame = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const callback = useRef();

  useEffect(() => {
    callback.current = () => {
      const currentClics = state.clicks.amount;
      const totalCount = Object.keys(state)
        .reduce(
          (acc, cur, idx) => idx === 0
            ? acc
            : acc + state[cur].amount * (state[cur].cost * 0.1),
          currentClics,
        );

      dispatch({ type: 'update', payload: totalCount });
    };
  }, [state]);

  useEffect(() => {
    const interval = setInterval(() => callback.current(), 1000);
    return () => clearInterval(interval);
  }, [callback]);

  return (
    <div className="gameContainer">
      
      <Clicker amount={state.clicks.amount} dispatch={dispatch} />
     
    </div>
  );
};

export default ClickerGame;