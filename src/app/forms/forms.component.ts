import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormArray,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  comArray: Array<ReactiveMessage> = new Array<ReactiveMessage>();
  mess: FormGroup;
  messageReactive = new ReactiveMessage();
  optionFramework = ['Angular', 'React', 'JavaScript', 'Java', 'C#'];
  constructor() {}

  ngOnInit() {
    this.mess = this.initForms();
  }
  initForms() {
    return new FormGroup({
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      nick: new FormControl(null, Validators.required),
      optionSelect: new FormControl(null, Validators.required),
      more: new FormArray(
        [new FormControl(null, [Validators.required])]
        // [this.moreValidators, Validators.required]
        // [new FormControl(null), new FormControl(null)],
        // [this.moreValidators, Validators.required]
      )
    });
    // Show change in imput
    // this.mess.valueChanges.subscribe(chenges => {
    // console.log(chenges);
    // });
  }

  onSubmit(a) {
    console.log(this.mess.value);
    // this.mess.value.forEach(element => {
    //  console.log(element);
    //  // this.comArray.push(element);
    // });
    this.comArray.push(this.mess.value);
    console.log(this.comArray);

    // console.log(a);
    this.messageReactive.topic = this.mess.value.topic;
    this.messageReactive.message = this.mess.value.message;
    this.messageReactive.email = this.mess.value.email;
    this.messageReactive.nick = this.mess.value.nick;
    this.messageReactive.optionSelect = this.mess.value.optionSelect;
    // console.log(this.messageReactive);
    this.mess = this.initForms();
    this.form.reset();
  }
  addmore() {
    const nextMore = <FormArray>this.mess.get('more');
    nextMore.push(
      new FormControl(null, [Validators.required])
      // new FormControl(null, [Validators.required, this.moreValidators])
    );
  }
  moreValidators(con: AbstractControl): ValidationErrors {
    const arr = <[string]>con.value;
    if (arr.includes('dom')) {
      return { moreValid: 'true' };
    }
  }
}
export class ReactiveMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public email?: string,
    public nick?: string,
    public optionSelect?: string
  ) {}
}
