import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public sessionId: Observable<number>;
  public token: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(map(params => +params.get('session_id')));
    this.token = this.route.fragment.pipe(map(fragment => fragment || 'None'));
  }
}
