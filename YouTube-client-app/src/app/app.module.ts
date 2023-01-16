import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './core/guards/authorization-guard';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { ReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    YoutubeModule,
    CoreModule,
    AuthModule,
    ReactiveFormsModule,
    ReduxModule,
  ],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent],
  exports: [],
})
export default class AppModule {}
