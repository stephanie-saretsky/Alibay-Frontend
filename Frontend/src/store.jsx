import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "Login") {
    return { ...state, login: true };
  }
  if (action.type === "logout-success") {
    return { ...state, login: false };
  }
  return state;
};

const store = createStore(
  reducer,
  { login: false },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
