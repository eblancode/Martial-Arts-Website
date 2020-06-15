import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Martial_art } from './martial_art';

const environment = {
  production: false,
  serverUrl: 'http://localhost:8080'
};

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getMAs() {
    return this.request('GET', `${environment.serverUrl}`);
  }
}
