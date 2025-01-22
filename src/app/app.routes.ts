import { Routes } from '@angular/router';
import { CourseListComponent } from './pages/home/course-list/course-list.component';
import { CourseItemComponent } from './pages/home/course-item/course-item.component';

export const routes: Routes = [
  {
    path: 'course-list',
    title: 'Course list',
    component: CourseListComponent,
  },
  {
    path: 'course-list/course',
    title: 'Course View',
    component: CourseItemComponent,
  },
  {
    path: 'course-list/course/:id',
    title: 'Course View',
    component: CourseItemComponent,
  },
  {
    path: '**',
    redirectTo: 'course-list',
  },
];
