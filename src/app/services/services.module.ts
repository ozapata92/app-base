import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TestService } from './test.services';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    TestService
  ]
})
export class ServicesModule { }
