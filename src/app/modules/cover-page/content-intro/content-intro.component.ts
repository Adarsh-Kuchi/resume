import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-intro',
  templateUrl: './content-intro.component.html',
  styleUrls: ['./content-intro.component.scss']
})
export class ContentIntroComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goHome(){
    this.router.navigate(['/home']);
  }

}
