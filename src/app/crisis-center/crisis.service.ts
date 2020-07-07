import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
    providedIn: 'root'
})
export class CrisisService {
    constructor(private messageService: MessageService) {}

    getCrises(): Observable<Crisis[]> {
        this.messageService.add('CrisisService: Fetched Crises');
        return of(CRISES);
    }

    getCrisis(id: number): Observable<Crisis> {
        return of(CRISES.find((crisis: Crisis) => id === crisis.id));
    }
}
