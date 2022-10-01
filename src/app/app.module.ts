import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiProgressBarModule } from './ui/components/ui-progress-bar/ui-progress-bar.module';
import { UiInputModule } from './ui/components/form/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTabsModule } from './ui/components/tabs/tabs.module';
import { UiFormFieldModule } from './ui/components/form/form-field/form-field.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiProgressBarModule,
    UiInputModule,
    ReactiveFormsModule,
    UiTabsModule,
    UiFormFieldModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
