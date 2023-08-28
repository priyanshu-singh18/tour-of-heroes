import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService){}

  getHeroes() : Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add("Hero Service : Heroes Fetched !!");
    return heroes;
  }

  getHero(id : number) : Observable<Hero | undefined>{
    const hero = HEROES.find(hero => hero.id === id);
    this.messageService.add(`Hero Service : Hero Fetched with id=${id}` )
    return of(hero);
  }
}
