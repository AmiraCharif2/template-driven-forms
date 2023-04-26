import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { MatchPasswordDirective } from './match-password.directive'
//import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxMaskDirective, NgxMaskPipe,provideNgxMask } from 'ngx-mask'


  


@NgModule({
  declarations: [
    AppComponent,
    ConfirmEqualValidatorDirective,
    MatchPasswordDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaskDirective, NgxMaskPipe
   
   
    //NgxMaskModule.forRoot(),
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }