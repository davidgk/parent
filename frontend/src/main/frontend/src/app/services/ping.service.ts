import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Ping} from "../model/ping";

@Injectable()
export class PingService {

  public url: string;

  constructor(protected httpClient: HttpClient) {
    this.url = `${ environment.apiUrl}/api/ping`;
  }


  makeAPing(pingValue: string):Observable<Account> {
    const ping = {myGreeting: pingValue} as Ping;
    return this.httpClient.post<any>(this.url + '/create', ping);
  }


}
