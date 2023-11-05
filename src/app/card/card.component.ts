import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() tabledata:any;
  @Input() icons:any;

  ngOnInit(){
    console.log(this.tabledata)   
  }
}
