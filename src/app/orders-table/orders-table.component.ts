import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  @Input() orders: any;
  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    console.log(this.orders);
  }

  columnDefs: ColDef[] = [
    {
      headerName: '#',
      cellRenderer: function (params: any) {
        return params.node.rowIndex + 1;
      },
      width: 900 / 7,
    },
    { headerName: 'Customer', field: 'name', width: 840 / 7 },
    { headerName: 'Product', field: 'product', width: 840 / 7 },
    {
      headerName: 'Delivery Date',
      field: 'delivery_date',
      cellRenderer: (params: any) =>
        this.datePipe.transform(params.value, 'dd/MM/yyyy'),
      width: 840 / 7,
    },
    {
      headerName: 'Status',
      field: 'status',
      cellStyle: (params) => {
        const status = params.data.status;

        // Define custom styling based on status values
        if (status === 'Pending') {
          return {
            background: `#7783a3`,
            textAlign: 'center',
            borderRadius: '5px',
          };
        } else if (status === 'Paid') {
          return {
            background: '#2ecd72',
            textAlign: 'center',
            borderRadius: '5px',
          };
        } else if (status === 'Failed') {
          return {
            background: '#ec576e',
            textAlign: 'center',
            borderRadius: '5px',
          };
        }

        // Default styling for other cases
        return null;
      },
      width: 840 / 7,
    },
    { headerName: 'Tracking No#', field: 'tracking_no', width: 840 / 7 },
    { headerName: 'Shipping', field: 'shipping',cellRenderer: function (params: any) {
      return params.value?'Yes':'No';
    }, width: 840 / 7 },
    {
      headerName: 'Actions',
      width: 840 / 7,
    },
  ];
}
