import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  selectedId: number;

  heroes$: Observable<Hero[]>;

  constructor(public messageService: MessageService, public heroService: HeroService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        this.selectedId = +param.get('id');
        return this.heroService.getHeroes();
      })
    );
  }
}
