import { ShowIfLoggedDirective } from './show-if-logged.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShowIfLoggedDirective],
  exports: [ShowIfLoggedDirective],
  imports: [CommonModule]
})
export class ShowIfLoggedModule{

}