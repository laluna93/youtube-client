import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import HeaderComponent from './components/header/header/header.component';
import FilltersComponent from './components/fillters/fillters.component';
import SortsComponent from './components/sorts/sorts.component';
import { ErrorComponent } from './pages/error/error.component';
import { CardComponent } from '../youtube/pages/card/card.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FilltersComponent,
    SortsComponent,
    ErrorComponent,
    CardComponent,

  ],
  providers: [],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],

  exports: [HeaderComponent],
})

export class CoreModule { }
