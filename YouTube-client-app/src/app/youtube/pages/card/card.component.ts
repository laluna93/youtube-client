import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroup, ValidationErrors, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddCardAction } from 'src/app/redux/actions/card-action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  formsCreateCard!: FormGroup;

  arr: any[] = [];

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formsCreateCard = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      discription: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      img: new FormControl('', [
        Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
      ]),
      linkVideo: new FormControl('', [
        Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),

      ]),
      createDate: new FormControl('', [
        Validators.required,
        this.validatorDate,
      ]),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  validatorDate(control: FormControl):ValidationErrors | null {
    const resDate = control.value;
    const nowDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    if (resDate > nowDate) {
      return {
        invalidDate: 'The date is invalid',
      };
    }

    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  submitForm() {
    this.store.dispatch(AddCardAction({
      payload: {
        title: this.formsCreateCard.value.title,
        description: this.formsCreateCard.value.discription,
        imgUrl: this.formsCreateCard.value.img,
        videoUrl: this.formsCreateCard.value.linkVideo,
        date: this.formsCreateCard.value.createDate,
      },
    }));
    this.formsCreateCard.reset();
    this.router.navigate(['']);
  }
}
