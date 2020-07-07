import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  selectedId: number;

  crises$: Observable<Crisis[]>;

  constructor(public messageService: MessageService, public crisisService: CrisisService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        this.selectedId = +param.get('id');
        return this.crisisService.getCrises();
      })
    );
  }
}
