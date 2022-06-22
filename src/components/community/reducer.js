const initialState = {
    clicks: { amount: 0 },
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'click':
        return { ...state, clicks: { ...state.clicks, amount: state.clicks.amount + 1 } };
      case 'increase':
        if (state[action.tier].cost <= state.clicks.amount) {
          return {
            ...state,
            [action.tier]: { ...state[action.tier], amount: state[action.tier].amount + 1 },
            clicks: { amount: state.clicks.amount - state[action.tier].cost },
          };
        }
        return state;
      case 'update':
        return (action.payload === state.clicks.amount)
          ? state
          : { ...state, clicks: { ...state.clicks, amount: action.payload } };
      default:
        throw new Error();
    }
  };
  
  export { reducer, initialState };