import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormArray
} from '@angular/forms';
import { WritePropExpr } from '@angular/compiler';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  mess: FormGroup;
  messageReactive = new ReactiveMessage();
  optionFramework = ['Angular', 'React', 'JavaScript', 'Java', 'C#'];
  constructor() {}

  ngOnInit() {
    this.mess = new FormGroup({
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      nick: new FormControl(null, Validators.required),
      optionSelect: new FormControl(null, Validators.required), // this.optionFramework[0]
      more: new FormArray([new FormControl(null), new FormControl(null)])
    });
  }
  onSubmit(a) {
    console.log(this.mess);
    console.log(a);
    this.messageReactive.topic = this.mess.value.topic;
    this.messageReactive.message = this.mess.value.message;
    this.messageReactive.email = this.mess.value.email;
    this.messageReactive.nick = this.mess.value.nick;
    this.messageReactive.optionSelect = this.mess.value.optionSelect;
    console.log(this.messageReactive);
    // this.form.reset();
  }
  addmore() {
    const nextMore = <FormArray>this.mess.get('more');
    nextMore.push(new FormControl(null));
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
