import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WritePropExpr } from '@angular/compiler';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  mess: FormGroup;
  messageReactive = new ReactiveMessage;
  optionFramework = ['Angular', 'React', 'JavaScript', 'Java', 'C#'];
  constructor() {}

  ngOnInit() {
    this.mess = new FormGroup({
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      nick: new FormControl(null, Validators.required),
      optionSelect: new FormControl(this.optionFramework[0])
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
