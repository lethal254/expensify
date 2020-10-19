import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 }) => ({
  type: "INCREMENT",
  incrementBy,
});
const decrementBy = (decrementBy = 1) => ({
  type: "DECREMENT",
  decrementBy,
});
const set = ({ count = 0 }) => ({
  type: "SET",
  count,
});
const reset = () => {
  type: "RESET";
};
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

store.getState();

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementBy({ decrementBy: 10 }));

store.dispatch(set({ count: 101 }));

store.dispatch(reset());

store.dispatch({
  type: "RESET",
});
