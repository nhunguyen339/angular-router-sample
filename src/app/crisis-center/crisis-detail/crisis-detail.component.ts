import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  public editName: string;
  public crisis: Crisis;

  constructor(private router: Router, private route: ActivatedRoute, private service: CrisisService, private dialog: DialogService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.crisis = data.crisis;
      this.editName = data.crisis.name;
    });
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises(this.crisis);
  }

  cancel() {
    this.gotoCrises(this.crisis);
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  public canDeactivate() {
    if (!this.crisis || this.crisis.name === this.editName) { return true; }

    return this.dialog.confirm('Do you want to discard your change?');
  }
}
