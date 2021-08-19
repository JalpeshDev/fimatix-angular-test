import { Action } from "@ngrx/store";

export const FETCH_WEATHER_BY_CITY = 'FETCH_WEATHER_BY_CITY';
export const FETCH_WEATHER_BY_CITY_SUCCESS = 'FETCH_WEATHER_BY_CITY_SUCCESS';
export const FETCH_WEATHER_BY_CITY_FAILURE = 'FETCH_WEATHER_BY_CITY_FAILURE';

export class FetchWeatherByCity implements Action {
    readonly type = FETCH_WEATHER_BY_CITY
    constructor(public cityName: string) { }
}

export class FetchWeatherByCitySuccess implements Action {
    readonly type = FETCH_WEATHER_BY_CITY_SUCCESS
    constructor(public payload: any) { }
}

export class FetchWeatherByCityFailure implements Action {
    readonly type = FETCH_WEATHER_BY_CITY_FAILURE
    constructor(public payload: any) { }
}

export type WeatherActions =
    | FetchWeatherByCity
    | FetchWeatherByCitySuccess
    | FetchWeatherByCityFailure