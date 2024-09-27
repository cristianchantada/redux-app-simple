import { createReducer, on } from "@ngrx/store";
import * as actions from "./contador.actions";

const initialState: number = 20;

const _contadorReducer = createReducer(
  initialState,
  on(actions.incrementar, (state) => state + 1),
  on(actions.decrementar, (state) => state - 1),
  on(actions.multiplicar, (state, {numero}) => state * numero),
  on(actions.dividir, (state, {numero}) => state / numero),
  on(actions.reset, () => 0),
);

export function counterReducer(state, action){
  return _contadorReducer(state, action);
}
