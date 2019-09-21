import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Ping} from "../model/ping";
import {Observable} from "rxjs/index";


@Injectable()
export class PingService {

  public url: string;

  constructor(protected httpClient: HttpClient) {
    this.url = `${ environment.apiUrl}/api/ping`;
  }


  makeAPing(pingValue: string):Observable<Ping> {
    const ping = {myGreeting: pingValue} as Ping;
    return this.httpClient.post<any>(this.url + '/create', ping);
  }


}
