import { Component, Pipe, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IModel } from '../model';
import { map, first } from 'rxjs/operators';
import { isDefined } from '@angular/compiler/src/util';
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {
form: string;
// index = 0;
mydata1: IModel[] = new Array<IModel>();
// mydata: Object[] = new Array<Object>();
 getdata;
// tslint:disable-next-line:no-inferrable-types
public submitted: boolean = false ;
// tslint:disable-next-line:no-inferrable-types
IsForUpdate: boolean = false;
// tslint:disable-next-line:no-inferrable-types

newItem: any = {};
updatedItem;
// tslint:disable-next-line:no-inferrable-types
buttonValue: string = 'Submit';
  constructor(private _fb: FormBuilder) { }
   langs: string[] = ['English', 'Marathi', 'Hindi'];
    myForm: FormGroup;
   name;
   // firstname: FormControl;
   // lastname: FormControl;
   // email: FormControl;
   // password: FormControl;
   // language: FormControl;

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


    // } else
    //   if (testData === undefined) {
    // //    console.log(testData);
    //   this.myForm = this._fb.group({
    //     name: this._fb.group({
    //     firstname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
    //      lastname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
    //     }),
    //     email: ['', Validators.compose([Validators.required,
    //      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
    //     password: ['', Validators.compose([Validators.required, Validators.minLength(8)
    //        /*Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')*/])],
    //       language: ['', Validators.required]
    //   });
    // this.onSubmit();
    //  }
     // this.firstname = new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]));
     // this.lastname = new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]));
     // this.email = new FormControl('', Validators.compose([Validators.required,
      // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]));
     // this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)
     // Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')))
     // this.language = new FormControl('', Validators.required);
   }
  /*createFormGroup() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstname: this.firstname,
        lastname: this.lastname,
      }),
        email: this.email,
        password: this.password,
        language: this.language

    }) ;
  }*/
     ngOnInit() {
       this.createFormControl({});
       // this.createFormGroup()
      }
      // tslint:disable-next-line:prefer-const

      onSubmit() {
        if (this.myForm.valid) {
          this.form = 'Form Submitted Successfully !!';
          console.log('Form Submitted!!!!!!!!!!!!');
          console.log(this.myForm.value);
          // this.getdata = this.myForm.value;
          this.mydata1.push(this.myForm.value);
          this.submitted = !this.submitted;
          // tslint:disable-next-line:prefer-const
          // in mapped variable we conveet a object into an aaray of object
           // const mapped = Object.keys(this.mydata).map(key => ({type: key, value: this.mydata[key]}));
           // this.mydata = mapped;
          // console.log(mapped);
          // console.log(this.mydata);
          console.log(this.mydata1);
            this.myForm.reset();
            this.submitted = !this.submitted;
        }
      }

       myFunction() {
        if (this.IsForUpdate === false) {
           this.onSubmit();
         } else
         if (this.IsForUpdate === true) {

          this.UpdateItem();
         }


       }

    remove(index) {

  this.mydata1.splice(index, 1);
}

// When user selects edit option
EditItem(i) {

  console.log(i);
  console.log(this.mydata1[i]);
  this.createFormControl(this.mydata1[i]);
  this.buttonValue = 'Update';
  // this.myForm.controls['password'].setValue(this.mydata1[i]);
  // for (let i = 0; i < this.mydata1.length; i++) {
  //   const element = array[i];
  // }
   this.updatedItem = i;
   this.IsForUpdate = true;
}
// When user clicks on update button to submit updated value
UpdateItem() {
  // tslint:disable-next-line:prefer-const
  let data = this.updatedItem;
  for (let i = 0; i < this.mydata1.length; i++) {
    if (i === data) {
      this.mydata1[i] = this.myForm.value;

    }
  }
   this.IsForUpdate = false;
   this.buttonValue = 'Submit';
  this.myForm.reset();
 }

}

