import { ActionReducerMap } from "@ngrx/store";
import { State, weatherReducer } from "./reducers/weather";

export interface AppState {
    weather?: State;
}

export const reducers: ActionReducerMap<AppState> = {
    weather: weatherReducer
};
