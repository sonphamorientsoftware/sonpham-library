import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModel } from '../../models/loginModel/LoginModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sonpham-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
