const INCREASE = "counter/increase";
const DECREASE = "counter/decrease";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  counter: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export default counter;