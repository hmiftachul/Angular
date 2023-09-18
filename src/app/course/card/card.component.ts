import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  courses: any[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.courses = this.sharedService.getCourses().value;
    this.sharedService.getCourses();
  }

  onDetail(detailCard: any[]) {
    this.sharedService.updateCard(detailCard);
  }
  
}
