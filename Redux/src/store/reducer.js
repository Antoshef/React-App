const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'ADD':
      return { ...state, counter: state.counter + action.value }
    case 'SUBTRACT':
      return { ...state, counter: state.counter - action.value }
    case 'DISPLAY':
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      }
    case 'DEL_RESULT':
      const updatedArray = state.results.filter(res => res.id !== action.elId)
      return {
        ...state,
        results: updatedArray,
      }
  }
  return state;
};

export default reducer;