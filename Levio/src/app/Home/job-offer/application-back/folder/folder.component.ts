import {Component, Input, OnInit} from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Inputt} from '../../../../modele/Input';
import {Application} from '../../../../modele/Application';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {NotifierService} from 'angular-notifier';
import {Letter} from '../../../../modele/Letter';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input()
  application: Application = new Application();
  private readonly notifier: NotifierService;
  registerForm: FormGroup;
  submitted = false;
  letterr: Letter = new Letter();


  constructor(private formBuilder: FormBuilder, public ngxSmartModalService: NgxSmartModalService,  notifierService: NotifierService) {
  }



  addL() {
    this.ngxSmartModalService.getModal('letter').open();

  }

  AddLetter() {
this.submitted = true;
if (this.registerForm.invalid) {
  console.log('invalid');
}  else {

}
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      salary: ['', [Validators.required, Validators.min(900)]],
    });
  }
  get f() { return this.registerForm.controls; }

}
