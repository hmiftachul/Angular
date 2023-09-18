import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private courses = new BehaviorSubject<any[]>([

        {
            img: 'react.jpeg',
            title: 'React JS',
            description: 'Mari belajar React JS'
        },
        {
            img: 'angular.png',
            title: 'Angular',
            description: 'Mari belajar Angular'
        },
        {
            img: 'Next.png',
            title: 'Next JS',
            description: 'Mari belajar Next JS'
        },
        {
            img: 'react.jpeg',
            title: 'React JS',
            description: 'Mari belajar React JS'
        },
        {
            img: 'angular.png',
            title: 'Angular',
            description: 'Mari belajar Angular'
        },
        {
            img: 'Next.png',
            title: 'Next JS',
            description: 'Mari belajar Next JS'
        },
    ]);

    courses$ = this.courses.asObservable()

    constructor() { }

    getCourses() {
        return this.courses;
    }

    updateCard(detailCard: any[]) {
        this.courses.next(detailCard);
    }
}
