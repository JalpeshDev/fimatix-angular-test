import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {
  @Input() temperature: string;

  @Input() weather_icon: string;

  @Input() weather_description: string;

  constructor() { }

}
