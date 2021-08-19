import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { FetchWeatherByCity } from './store/actions/weather';

@Component({
  selector: 'app-weather',
  template: `
    <app-search (onSearch)="citySearch($event)"></app-search>
    <app-results></app-results>
  `
})
export class WeatherContainer {

  constructor(
    private store: Store<AppState>,
  ) { }

  /**
   * function fired when output event emit
   * @param searchValue an Input String value 
   */
  citySearch(searchValue: string) {
    //dispatch action to with city name
    this.store.dispatch(new FetchWeatherByCity(searchValue));
  }
}
