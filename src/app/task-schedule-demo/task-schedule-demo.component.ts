import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-task-schedule-demo',
    templateUrl: './task-schedule-demo.component.html',
    styleUrls: ['./task-schedule-demo.component.css']
})
export class TaskScheduleDemoComponent implements OnInit {
    todo: Array<Hero> = [];
    done: Array<Hero> = [];


    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
        .subscribe(heroes => this.todo = heroes);
    }

    drop(event: CdkDragDrop<Hero[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }

        if (this.done.length > 0) {
            let tmp: number = 0;
            this.done.forEach((hero: Hero) => {
                hero.orderNum = tmp;
                tmp++;
                console.log(`${hero.id} - ${hero.name} - ${hero.orderNum}`);
            });
        }
    }
}
