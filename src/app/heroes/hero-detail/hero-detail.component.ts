import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  public hero$: Observable<Hero>;

  constructor(private router: Router, private route: ActivatedRoute, private service: HeroService) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        return this.service.getHero(+param.get('id'));
      })
    );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/