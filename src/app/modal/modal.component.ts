import { Component, OnInit, TemplateRef} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IModel } from '../model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
modalRef: BsModalRef;
myForm: FormGroup;
form: String;
langs: string[] = ['English', 'Marathi', 'Hindi'];
mydata1: IModel[] = new Array<IModel>();
  constructor(private _fb: FormBuilder, private modalService: BsModalService) { }
  ngOnInit() {
    this.createFormControl({});
  }
  createFormControl(testData) {
    // if (testData !== undefined) {
      // tslint:disable-next-line:prefer-const
        console.log(((testData || {}).name || {}).firstname);
       // console.log(testData.name ? testData.name.firstname : null);
      this.myForm = this._fb.group({
        name: this._fb.group({
         // tslint:disable-next-line:max-line-length
         firstname: [testData.name ? testData.name.firstname : null , Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
         // tslint:disable-next-line:max-line-length
         lastname: [testData.name ? testData.name.lastname : null , Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        }),
        email: [testData.email || '', Validators.compose([Validators.required,
         Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
         password: [testData.password || '', Validators.compose([Validators.required, Validators.minLength(8)
           /*Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')*/])],
           language: [testData.language || '', Validators.required]

      });
    }

    onSubmit() {
      if (this.myForm.valid) {
        this.form = 'Form Submitted Successfully !!';
        console.log('Form Submitted!!!!!!!!!!!!');
        console.log(this.myForm.value);
        // this.getdata = this.myForm.value;
        this.mydata1.push(this.myForm.value);
        // tslint:disable-next-line:prefer-const
        // in mapped variable we conveet a object into an aaray of object
         // const mapped = Object.keys(this.mydata).map(key => ({type: key, value: this.mydata[key]}));
         // this.mydata = mapped;
        // console.log(mapped);
        // console.log(this.mydata);
        console.log(this.mydata1);
          this.myForm.reset();
      }
    }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
}
