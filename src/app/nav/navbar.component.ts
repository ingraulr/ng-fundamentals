import { Component } from '@angular/core'

@Component ({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (mas-width: 1200px) {searchForm {display:none}}
  `]
})

export class NavBarComponent {

}
