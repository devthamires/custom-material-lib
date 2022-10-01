import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProgressBarComponent } from './ui-progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    UiProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [UiProgressBarComponent]
})
export class UiProgressBarModule { }
