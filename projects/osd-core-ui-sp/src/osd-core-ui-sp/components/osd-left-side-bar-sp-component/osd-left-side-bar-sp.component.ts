import { Component, OnInit, Input } from '@angular/core';
import { OsdLeftSideBarSPService } from '../../services/osd-left-side-bar-sp-service/osd-left-side-bar-sp.service';
import { OsdLeftSideBarSPModel } from '../../models/osd-left-side-bar-sp-model/OsdLeftSideBarSPModel'

@Component({
  selector: 'osd-left-side-bar-sp',
  templateUrl: './osd-left-side-bar-sp.component.html',
  styleUrls: ['./osd-left-side-bar-sp.component.scss']
})
export class OsdLeftSideBarSPComponent implements OnInit {

   /**
   * leftSideBars should be a LeftSideBarModel[]
   */
  @Input() leftSideBars: OsdLeftSideBarSPModel[];
  
  constructor(private leftSideBarService: OsdLeftSideBarSPService) { }

  ngOnInit() {
    this.leftSideBars = this.leftSideBarService.GetLeftSideBars(this.leftSideBars);
  }

}
