//filters component that includes drop down boxes to select different filters to choose from. Filter by year, actor, genre, revenue and budget
//filters should be in drop down boxes
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
