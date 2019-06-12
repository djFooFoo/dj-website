import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline-triangle',
  template: `
    <div [ngClass]="left ? 'triangle-left' : 'triangle-right'"></div>
  `,
  styles: [`
    .timeline {
      position: relative;
    }

    .timeline:before, .timeline:after {
      content: " ";
      display: table;
    }

    .timeline:after {
      clear: both;
    }

    /* This is the vertical line: didn't put this in a ::before so we can hide it on a small screen using bootstrap class. */
    .timeline-line {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -0.25%;
      height: 100%;
      width: 0.5%;
      background: #757575;
    }

    .timeline-block {
      padding-bottom: 16px;
      overflow: hidden;
      position: relative;
      clear: both;
    }

    .date-right {
      color: #555555;
      position: absolute;
      width: 100%;
      margin-left: 1rem;
      left: 126.5%;
      font-size: 0.85rem;
      top: 9px;
    }

    .date-left {
      color: #555555;
      position: absolute;
      width: 100%;
      margin-right: 1rem;
      text-align: right;
      right: 126.5%;
      font-size: 0.85rem;
      top: 9px;
    }

    .timeline-block:after {
      content: '';
      position: absolute;
      top: 8px;
      display: block;
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -15px;
      background: #101010;
      border-radius: 15px;
      box-shadow: 0 0 0 4px #555555, inset 0 2px 0 black;
    }

    .timeline-content-left {
      position: relative;
      float: left;
      width: 42.5%;
      clear: both;
      border-color: #555555;
      border-width: 2px;
      border-style: solid;
      border-radius: 4px;
    }

    .triangle-left {
      content: '';
      position: absolute;
      display: block;
      top: 23px;
      left: 100%;
      margin-top: -9px;
      height: 0;
      width: 0;
      border: 9px solid transparent;
      border-left: 9px solid #555555;
    }

    .triangle-left:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin-top: -9px;
      margin-left: -12px;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      border-right: 9px solid transparent;
      border-left: 9px solid #F7F7F7;
    }

    .timeline-content-right {
      position: relative;
      float: right;
      width: 42.5%;
      clear: both;
      border-color: #555555;
      border-width: 2px;
      border-style: solid;
      border-radius: 4px;
    }


    .triangle-right {
      content: '';
      position: absolute;
      display: block;
      top: 23px;
      right: 100%;
      margin-top: -9px;
      height: 0;
      width: 0;
      border: 9px solid transparent;
      border-right: 9px solid #555555;
    }

    .triangle-right:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin-top: -9px;
      margin-left: -6px;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      border-left: 9px solid transparent;
      border-right: 9px solid #F7F7F7;
    }

    .list-group-horizontal .list-group-item {
      display: inline-block;
      background-color: #107896;
      color: #B0C537;
      padding: 6px 14px;
      margin-bottom: 4px;
    }

    .list-group-horizontal .list-group-item:first-child {
      border-top-right-radius: 0;
      border-bottom-left-radius: 4px;
    }

    .list-group-horizontal .list-group-item:last-child {
      border-top-right-radius: 4px;
      border-bottom-left-radius: 0;
    }

    .fa {
      display: table-cell;
    }

    li a:hover {
      text-decoration: none;
    }

    /* Small Devices */
    @media only screen and (max-width: 768px) {
      .timeline-content-left, .timeline-content-right {
        float: left;
        width: 100%;
      }

      .triangle-left:after {
        display: none;
      }

      .triangle-right:after {
        display: none;
      }

      .timeline-block:after {
        display: none;
      }

      .timeline-line {
        display: none;
      }
    }
  `]
})
export class TimelineTriangleComponent implements OnInit {

  @Input()
  left: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
