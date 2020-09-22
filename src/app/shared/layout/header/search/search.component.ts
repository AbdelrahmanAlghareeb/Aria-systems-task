import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchPlaceHolder :string = "Search in Products across all Aira dealers"
  constructor() { }

  ngOnInit(): void {
  }

}
