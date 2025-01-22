import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  navigate: Router = inject(Router);
  courseService: CourseService = inject(CourseService);

  courseId: number = this.router.snapshot.params['id'];

  courseItem$ = this.courseService.getCourseById(this.courseId);

  goToCourses() {
    this.navigate.navigate([`course-list`]);
  }
}
