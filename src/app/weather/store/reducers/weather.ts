import { WeatherActions } from "../actions/weather";
import * as weatherActionTypes from './../actions/weather';

// Create state interface
export interface State {
    results: any,
    isLoading: boolean,
    error: any
}

// Set initial state value
const initialState: State = {
    results: [],
    isLoading: false,
    error: null
}


export function weatherReducer(state = initialState, action: WeatherActions) {
    switch (action.type) {
        case weatherActionTypes.FETCH_WEATHER_BY_CITY:
            return {
                ...state,
                error: null,
                isLoading: true
            }

        case weatherActionTypes.FETCH_WEATHER_BY_CITY_SUCCESS:
            const results = Object.assign([], state.results);
            results.push(action.payload);
            return {
                ...state,
                results: results,
                error: null,
                isLoading: false
            }

        case weatherActionTypes.FETCH_WEATHER_BY_CITY_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        default:
            return state;
    }
}