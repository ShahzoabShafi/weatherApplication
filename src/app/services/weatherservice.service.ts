import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Data } from './weather.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) {}

  getWeatherData(cityname:string):Observable<Data>{
    return this.http.get<Data>(environment.baseURL,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostName,environment.XRapidAPIHost)
      .set(environment.XRapidAPIKeyName,environment.XRapidAPIKey),
      params: new HttpParams()
      .set('city',cityname)
    })
  }
}