import {Component, OnInit, Injectable} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class OombaDataService {

  constructor(private http: Http) {}
  private usersUrl = 'http://swapi.co/api/people/';
  // private usersUrl = 'https://httpbin.org/get';

  public getData() {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
