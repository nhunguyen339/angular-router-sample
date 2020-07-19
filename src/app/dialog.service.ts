import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  public confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is that ok?');
    return of(confirmation);
  }
}
