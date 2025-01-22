import { Component, inject } from '@angular/core';
import { CourseService } from '../service/course.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  router: Router = inject(Router);
  courseService: CourseService = inject(CourseService);

  courseList$ = this.courseService.getAllCourses();

  goToCourseItem(id: number) {
    this.router.navigate([`course-list/course/${id}`]);
  }

  goToCourse() {
    this.router.navigate([`course-list/course`]);
  }
}
