import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotifierService} from 'angular-notifier';
import {Test} from '../../../../models/Test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  addTest: Test = new Test();
  private readonly notifier: NotifierService;

  constructor(public ngxSmartModalService: NgxSmartModalService, private formBuilder: FormBuilder, notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      sel: ['', [Validators.required]],
    });
  }
  get f() { return this.registerForm.controls; }
  addt() {
    this.ngxSmartModalService.getModal('test').open();

  }

  AddTest() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('invalid');
    } else {


    //  this.service.addInterview(this.interviewadd, this.idApp).subscribe(res => console.log('aaaa'));
      this.ngxSmartModalService.getModal('test').close();
      this.notifier.show( {
        type: 'success',
        message: 'Test added',
        id: 'THAT_NOTIFICATION_ID' // Again, this is optional
      } );
      // this.interviews.push(this.interviewadd);
      this.submitted = false;


    }
    }
}
