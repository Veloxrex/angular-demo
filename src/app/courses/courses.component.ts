import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 10 Fundamentals',
      description: 'Learn the fundamentals of Angular 10',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelctedCourse();
  }

  resetSelctedCourse () {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.selectedCourse = emptyCourse;
  }
  onSelectedCourse (course) {
    this.selectedCourse = course
  }

  onSaveCourse () {
    
  }
  onDeleteCourse (courseId) {
  
  }

  cancel() {
    this.resetSelctedCourse()
  }
}
