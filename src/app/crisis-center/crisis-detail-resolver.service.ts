import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CrisisService } from './crisis.service';
import { take, mergeMap } from 'rxjs/operators';
import { of, EMPTY, Observable } from 'rxjs';
import { Crisis } from './crisis';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private crisisService: CrisisService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    const crisisId = +route.paramMap.get('id');

    return this.crisisService.getCrisis(crisisId).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        }

        this.router.navigate(['/crisis-center']);
        return EMPTY;
      })
    );
  }
}
