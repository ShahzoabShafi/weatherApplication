import { Data } from './services/weather.interface';
import { WeatherserviceService } from './services/weatherservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherdata?: Data
  cityname: string = 'Karachi'
  city?: string = 'Karachi'

  constructor(private Weatherservice: WeatherserviceService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityname)
    this.cityname = ''
  }


  private getWeatherData(city: string) {
    this.Weatherservice.getWeatherData(city).subscribe({
      next: (response) => {
        console.log(response)
        this.weatherdata = response
      }
    })
  }

  onSubmit() {
    this.getWeatherData(this.cityname)
    this.city = this.cityname
    this.cityname = ''
  }
}


