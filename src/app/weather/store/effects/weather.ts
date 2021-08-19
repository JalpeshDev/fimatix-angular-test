import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from "rxjs";

import { WeatherService } from "../../weather.service";
import * as weatherActionTypes from './../actions/weather'

@Injectable()
export class WeatherEffects {
    constructor(
        private action: Actions,
        private weatherService: WeatherService
    ) { }

    //FETCH Weather Effect
    fetchWeatherByCity$ = createEffect(() => this.action.pipe(
        ofType<weatherActionTypes.FetchWeatherByCity>(weatherActionTypes.FETCH_WEATHER_BY_CITY),
        mergeMap(
            (data) => this.weatherService.searchWeatherByCity(data.cityName)
                .pipe(map((response) => new weatherActionTypes.FetchWeatherByCitySuccess(response)),
                    catchError((error) => of(new weatherActionTypes.FetchWeatherByCityFailure(error?.error?.message ? error.error.message : 'unknown error'))))
        )
    ));
}