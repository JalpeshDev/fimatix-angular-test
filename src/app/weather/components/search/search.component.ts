import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  //form control for search input
  searchCtrl: FormControl = new FormControl('', [Validators.required]);
  
  //emit the search event when user click on search button
  @Output() onSearch = new EventEmitter();

  constructor() { }

  //function to search the weather data by city
  search() {
    // check control is not valid then we showing error else we emit event to get the weather data
    if (!this.searchCtrl.valid) {
      this.searchCtrl.markAsTouched();
      return;
    }
    this.onSearch.emit(this.searchCtrl.value);
    this.searchCtrl.reset();
  }
}
