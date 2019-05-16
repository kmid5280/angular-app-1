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
    isFavorite: true
  }
  courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'}
  ];
  
  viewMode = 'map';

  onAdd() {
    let newId = this.courses[this.courses.length-1].id + 1
    this.courses.push({ id: newId, name: `course ${newId}`})
    console.log(this.courses)
  }

  onRemove(course) {
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1)
  }
}
