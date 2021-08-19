import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { State } from "../reducers/weather";

export const getWeather = (state: AppState) => state.weather;

export const getWeatherResults = createSelector(
    getWeather,
    (weather: State) => weather?.results
);

export const getLoading = createSelector(
    getWeather,
    (weather: State) => weather?.isLoading
);

export const getError = createSelector(
    getWeather,
    (weather: State) => weather?.error
);