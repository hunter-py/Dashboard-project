import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
})
export class GraphsComponent implements OnInit {
  ngOnInit(): void {
    const xValues = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 16];

    const xvalues2 = [
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4',
      'Category 5',
    ];
    const yvalues2 = [
      {
        label: 'Dataset 1',
        data: [10, 20, 15, 30, 25],
        backgroundColor: 'rgba(75, 192, 192, 0.7)', // Column color
        borderWidth: 1, // Border width
      },
      {
        label: 'Dataset 2',
        data: [15, 25, 20, 35, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderWidth: 1,
      },
    ];
    const xvalues3 = [
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4',
      'Category 5',
    ];
    // Get the canvas element and initialize the chart
    const data = {
      labels: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
      ],
      datasets: [
        {
          label: 'Income',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Borrow',
          data: [10, 15, 7, 2, 8],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Asset',
          data: [5, 8, 14, 9, 6],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderWidth: 1,
        },
      ],
    };

    const data1 = {
      labels: ['Men', 'Electronics', 'Women'],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
          borderColor: 'white',
          borderWidth: 2,
        },
      ],
    };

    new Chart('myChart', {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            label:'sales',
            fill: false,
            backgroundColor: 'rgba(0,0,255,1.0)',
            borderColor: 'rgba(0,0,255,0.1)',
            data: yValues,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: { min: 0, max: 16 },
        },
      },
    });

    // Get the canvas element and initialize the chart
    new Chart('myColumnChart', {
      type: 'bar',
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const myChart = new Chart('doughnutchart', {
      type: 'doughnut',
      data: data1,
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }
}
