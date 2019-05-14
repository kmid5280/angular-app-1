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
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    colSpan = 2;
    isActive = true;


    constructor(service: CoursesService) {
        this.courses = service.getCourses();

    }
    getTitle() {
        return this.title;
    }
}