import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'osd-login-sp',
  templateUrl: './osd-login-sp.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./osd-login-sp.component.scss']
})
export class OsdLoginSPComponent implements OnInit {
  closeResult: string;
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private modalService: NgbModal,  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }
  public onSubmit(loginSuccess) : void {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    
    this.modalService.open(loginSuccess, { centered: true });
    this.loading = false;
  }
  
}
