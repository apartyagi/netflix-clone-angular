import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private http:HttpClient) { 

  }
    get_api_result(path){
      return this.http.get(`https://api.themoviedb.org/3${path}`);
    }
}
