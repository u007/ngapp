import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>('/api/config');
  }
}
