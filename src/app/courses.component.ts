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
        `
})
export class CoursesComponent {
    title = "List of courses";
    courses
    colSpan = 2

    constructor(service: CoursesService) {
        this.courses = service.getCourses();

    }
    getTitle() {
        return this.title;
    }
}