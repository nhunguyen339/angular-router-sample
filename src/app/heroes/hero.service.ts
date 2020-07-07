import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor(private messageService: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: Fetched heroes');
        return of(HEROES);
    }

    getHero(id: number): Observable<Hero> {
        return of(HEROES.find((hero: Hero) => id === hero.id));
    }
}
