import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  url: string = "http://localhost:3000/user"

  addUser(event:any):Observable<any>{
    return this.httpClient.post<any>(this.url,event);
  }

}
