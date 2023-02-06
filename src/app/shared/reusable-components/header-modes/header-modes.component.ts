import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-header-modes',
  templateUrl: './header-modes.component.html',
  styleUrls: ['./header-modes.component.scss']
})
export class HeaderModesComponent implements OnInit {
  theme:Theme = 'light-theme';


  constructor(@Inject(DOCUMENT)
     private document:Document,
     private renderer: Renderer2

  ) { }

  ngOnInit(): void {
    this.initializeTheme
  }
  switchTheme(){
    this.document.body.classList.replace(this.theme, this.theme ==='light-theme'? (this.theme = 'dark-theme') :(this.theme = 'light-theme'))

  }

  initializeTheme = () =>
    this.renderer.addClass(this.document.body , this.theme);



}
export type Theme = 'light-theme' | 'dark-theme';
