import { Component, Input, OnInit , OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.scss']
})
export class NavbarListComponent implements OnInit {


  constructor( private router: Router) {}
  

  ngOnInit(): void {
  }


}
