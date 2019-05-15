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
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
            
            `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    colSpan = 2;
    isActive = true;
    email = "me@example.com";


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