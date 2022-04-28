import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: any
  isCollapsed = true
  toggleCollapseText = ""

  constructor() {
    this.setToggleCollapseText()
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
    this.setToggleCollapseText()
  }

  setToggleCollapseText(){
    if(this.isCollapsed) this.toggleCollapseText = 'Expand'
    else this.toggleCollapseText = 'Collapse'
  }

  ngOnInit(): void {
  }
}
