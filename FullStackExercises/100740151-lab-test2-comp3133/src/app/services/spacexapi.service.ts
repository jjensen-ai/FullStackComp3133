import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  public launchUrl = "https://api.spacexdata.com/v3/launches"

  constructor(private httpClient: HttpClient) { }

  public getLaunches(): Observable<any> {
    return this.httpClient.get(this.launchUrl);
  }
  
  public getFlightDetails(flight_number: number): Observable<any> {
    return this.httpClient.get(`${this.launchUrl}/${flight_number}`)
  }
}
