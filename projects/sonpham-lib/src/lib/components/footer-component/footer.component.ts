import { Component, OnInit, Input } from '@angular/core';
import { FooterService } from '../../services/footerService/footer.service';
import { FooterModel } from '../../models/footerModel/FooterModel';

@Component({
  selector: 'sonpham-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * footer should be a FooterModel
   */
  @Input() footer: FooterModel;

  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.footer = this.footerService.GetFooter(this.footer);
  }

  
}
