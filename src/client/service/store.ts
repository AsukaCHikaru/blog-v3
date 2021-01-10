import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initialRootState, rootReducer, RootState } from "./reducer";

declare let window: { __INITIAL_STATE__?: RootState };

const initialState = window.__INITIAL_STATE__ || initialRootState;

delete window.__INITIAL_STATE__;

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
