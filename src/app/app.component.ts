import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form!: FormGroup;
  inputSearch!: FormControl;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: ['', Validators.required]
    })

    this.inputSearch = new FormControl('');

    this.getInputSearchValues()

  }

  private getInputSearchValues() {
    this.inputSearch.valueChanges.pipe(debounceTime(1000), distinctUntilChanged(), tap(console.log)).subscribe();
  }
}
