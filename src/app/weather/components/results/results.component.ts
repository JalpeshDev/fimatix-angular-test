import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../store';
import { getError, getLoading, getWeatherResults } from '../../store/selectors/weather';
import * as moment from 'moment';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  //weather result observable
  weatherResults$: Observable<any> = this.store.select(getWeatherResults);

  //loading status observable
  isLoading$: Observable<any> = this.store.select(getLoading);

  //Error status observable
  error$: Observable<any> = this.store.select(getError);

  //Subscription for adding all subscription and unsubscribe at ngOnDestroy
  private subScriptions: Subscription[] = [];

  //weather listing for display data in html
  weatherList: any = [];

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    //Subscribe to weather results and filter for 06 AM, 12 PM, 06 PM and 00 AM to display in html
    const tomorrowDate = moment(new Date()).add(1, 'day').format('DD/MM/YYYY');
    const tomorrowNextDate = moment(new Date()).add(2, 'day').format('DD/MM/YYYY');
    this.subScriptions.push(
      this.weatherResults$.subscribe((weatherResults) => {
        this.weatherList = [];
        weatherResults.forEach(weather => {
          const weatherObject = {
            city: weather.city,
            morningWeather: weather.list.filter((e) => moment(e.dt_txt).format('DD/MM/YYYY') === tomorrowDate && (moment(e.dt_txt).format('HH:mm') === moment('6:00', 'HH:mm').format('HH:mm')))[0],
            noonWeather: weather.list.filter((e) => moment(e.dt_txt).format('DD/MM/YYYY') === tomorrowDate && (moment(e.dt_txt).format('HH:mm') === moment('12:00', 'HH:mm').format('HH:mm')))[0],
            eveningWeather: weather.list.filter((e) => moment(e.dt_txt).format('DD/MM/YYYY') === tomorrowDate && (moment(e.dt_txt).format('HH:mm') === moment('18:00', 'HH:mm').format('HH:mm')))[0],
            nightWeather: weather.list.filter((e) => moment(e.dt_txt).format('DD/MM/YYYY') === tomorrowNextDate && (moment(e.dt_txt).format('HH:mm') === moment('00:00', 'HH:mm').format('HH:mm')))[0]
          };

          this.weatherList = [...this.weatherList, weatherObject]
        });
      }))
  }

  ngOnDestroy() {
    this.subScriptions.forEach((subscription) => subscription.unsubscribe())
  }
}


