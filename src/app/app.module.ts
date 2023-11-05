import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NgChartsModule } from 'ng2-charts';
import { CardComponent } from './card/card.component';
import { ElipsisPipe } from './elipsis.pipe';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { ShippingPipe } from './shipping.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { UsersComponent } from './users/users.component';
import { GraphsComponent } from './graphs/graphs.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    CardComponent,
    ElipsisPipe,
    OrdersTableComponent,
    ShippingPipe,
    UsersComponent,
    GraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    AgGridModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
