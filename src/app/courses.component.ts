import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button 
            [style.backgroundColor]="isActive? 'blue' : 'white'"
            (click)="onSave($event)">
            Save
        </button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /><br/>
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating }} <br/>
        {{ course.price }} <br/>
        {{ course.releaseDate }}<br/>
        {{ longText | summary:10 }}<br/>
            `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    colSpan = 2;
    isActive = true;
    email = "me@example.com";
    course = {
        title: "Complete Angular Tutorial",
        rating: 4.93,
        students: 5234,
        price: 100,
        releaseDate: new Date(2019, 5, 1),
        longText: `
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        `
    }


    constructor(service: CoursesService) {
        this.courses = service.getCourses();

    }
    getTitle() {
        return this.title;
    }
    onSave($event) {
        console.log('button clicked', $event);
    }
    onKeyUp() {
        console.log(this.email)
    }
}