import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //this.http.get(`https://1.api.fy23ey05.careers.ifelsecloud.com/`).subscribe(data=>console.log(data));
  }

}
