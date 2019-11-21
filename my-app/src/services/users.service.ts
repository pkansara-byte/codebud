import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Router, NavigationStart } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ResponseModel } from '../models/response.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	url: string = environment.apiUrl;
  	constructor(private apiService: ApiService) {  		
  	}


  	getDetail(slug): Observable<ResponseModel> {      
    return this.apiService.get('/users/' + slug)
        .pipe(map(data => data));
    }
}
