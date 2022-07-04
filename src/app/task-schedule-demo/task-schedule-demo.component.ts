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
    todo: Array<string> = [];
    done: Array<string> = [];


    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
        .subscribe(heroes => {
            heroes.map(hero => {
                this.todo.push(hero.name);
            });
        });
    }

    drop(event: CdkDragDrop<string[]>) {
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
    }
}
