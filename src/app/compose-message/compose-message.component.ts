import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {
  public message: string;
  public details: string;
  public saving: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public send() {
    this.details = 'Sending Message...';
    this.saving = true;

    setTimeout(() => {
      this.saving = false;
      this.closePopup();
    }, 1000);
  }

  public cancel() {
      this.closePopup();
  }

  public closePopup() {
    this.router.navigate([{outlets: {popupOutlet: null}}]);
  }
}
