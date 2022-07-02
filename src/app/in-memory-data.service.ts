import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    constructor() { }

    createDb() {
        const heroes = [
            { id: 12, name: '女娲，Nv Wa' },
            { id: 13, name: '蚩尤，Chi You' },
            { id: 14, name: '关羽，Guan Yu' },
            { id: 15, name: '吕布，Lv Bu' },
            { id: 16, name: '屈原，Qu Yuan' },
            { id: 17, name: '曹操，Cao Cao' },
            { id: 18, name: '岳飞，Yue Fei' },
            { id: 19, name: '文天祥, Wen Tianxiang' },
            { id: 20, name: '林则徐，Lin Zexu' }
        ];
        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0
            ? Math.max(...heroes.map(hero => hero.id)) + 1
            : 11;
    }
}
