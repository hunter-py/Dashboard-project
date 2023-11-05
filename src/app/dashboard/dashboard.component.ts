import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  constructor(private authService: AuthenticationService) {
  }
  tableData: any;
  icons=['fa fa-music','fa fa-pie-chart','fa fa-download','fa fa-refresh']

  ngOnInit() {
    this.getData()
  }
  getData(){
    this.authService.getTableData().subscribe(data=>{
      this.tableData=data;
      console.log(data)
    })
  }
}
