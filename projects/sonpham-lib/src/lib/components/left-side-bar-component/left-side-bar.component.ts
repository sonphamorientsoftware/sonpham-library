import { Component, OnInit, Input } from '@angular/core';
import { LeftSideBarService } from '../../services/leftSideBarService/left-side-bar.service';
import { LeftSideBarModel } from '../../models/leftSideBarModel/LeftSideBarModel'

@Component({
  selector: 'sonpham-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {

   /**
   * leftSideBars should be a LeftSideBarModel[]
   */
  @Input() leftSideBars: LeftSideBarModel[];
  
  constructor(private leftSideBarService: LeftSideBarService) { }

  ngOnInit() {
    this.leftSideBars = this.leftSideBarService.GetLeftSideBars(this.leftSideBars);
  }

}
