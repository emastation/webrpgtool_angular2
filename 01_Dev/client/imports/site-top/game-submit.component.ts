import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'game-submit',
  templateUrl: '/client/imports/site-top/game-submit.component.html'
})
export class GameSubmitComponent {
  submitForm: ControlGroup;

  constructor() {
    let fb = new FormBuilder();

    this.submitForm = fb.group({
      title: ['', Validators.required],
      identifier: ['', Validators.required]
    });
  }

  addGame(game) {
    if (this.submitForm.valid) {
      if (Meteor.userId()) {

        const attribute = {
          title: game.title,
          identifier: game.identifier
        };

        Meteor.call('createGame', attribute, (error, result) => { // display the error to the user and abort
          if (error)
            return alert(error.reason);

          // show this result but route anyway
          if (result.exists)
            alert('すでに登録されている識別子です。');

          (<Control>this.submitForm.controls['title']).updateValue('');
          (<Control>this.submitForm.controls['identifier']).updateValue('');
        });

      } else {
        alert('ログインしてからゲームを作成してください。');
      }
    }
  }
}
