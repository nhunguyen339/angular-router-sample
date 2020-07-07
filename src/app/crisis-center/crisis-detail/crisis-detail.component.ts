import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  public crisis$: Observable<Crisis>;

  constructor(private router: Router, private route: ActivatedRoute, private service: CrisisService) { }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        return this.service.getCrisis(+param.get('id'));
      })
    );
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['/crisis-center', {id: crisisId, foo: 'foo'}]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/