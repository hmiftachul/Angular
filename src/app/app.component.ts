import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-day-5';

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.courses$.subscribe(data => {
      console.log(data);
      
    })
  }
}
