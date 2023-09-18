import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CourseComponent } from './course.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    CardComponent,
    CourseComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    CourseComponent,
    NavbarComponent]
})
export class CourseModule { }
