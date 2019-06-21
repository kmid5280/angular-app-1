import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-one';
  post = {
    title: "Title",
    isFavorite: false,
  }
  courses
  canSave = true;
  task = {
    title: 'Review applications',
    assignees: [
      {
        id: 1,
        name: null,
      },
      {
        id: 2,
        name: 'John Doe',
      },
    ]
  }
  
  viewMode = 'map';

  onAdd() {
    let newId = this.courses[this.courses.length-1].id + 1
    this.courses.push({ id: newId, name: `course ${newId}`})
  }

  onRemove(course) {
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1)
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course 1'},
      {id: 2, name: 'course 2'},
      {id: 3, name: 'course 3'},
    ];
  }

  onFavoriteChanged(eventArgs) {
    console.log('Favorite changed: ' + eventArgs)
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
