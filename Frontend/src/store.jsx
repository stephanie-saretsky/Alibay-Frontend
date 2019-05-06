import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "Signup") {
    return { ...state, signup: true };
  }
  if (action.type === "Login") {
    return { ...state, login: true };
  }
  return state;
};

const store = createStore(
  reducer,
  { signup: false, login: false },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
