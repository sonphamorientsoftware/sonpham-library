import { Component, OnInit, Input } from '@angular/core';
import { OsdFooterSPService } from '../../services/osd-footer-sp-service/osd-footer-sp.service';
import { OsdFooterSPModel } from '../../models/osd-footer-sp-model/OsdFooterSPModel';

@Component({
  selector: 'osd-footer-sp',
  templateUrl: './osd-footer-sp.component.html',
  styleUrls: ['./osd-footer-sp.component.scss']
})
export class OsdFooterSPComponent implements OnInit {

  /**
   * footer should be a FooterModel
   */
  @Input() footer: OsdFooterSPModel;

  constructor(private footerService: OsdFooterSPService) { }

  ngOnInit() {
    this.footer = this.footerService.GetFooter(this.footer);
  }

  
}
