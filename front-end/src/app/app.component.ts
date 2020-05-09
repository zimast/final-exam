import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) {

  }
  // @ViewChild('')

  public navLinks: NavLink[] = [
    {
      label: 'Find Question',
      path: 'search'
    },
    {
      label: 'Create Question',
      path: 'create'
    },
    {
      label: 'Test',
      path: 'test'
    },
  ];
}
