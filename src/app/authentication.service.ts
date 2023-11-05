import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  getTableData(){
    return this.http.get(`https://1.api.fy23ey05.careers.ifelsecloud.com/`).pipe(map(data=>{return data}))
  }

}
