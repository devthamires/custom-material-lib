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
  passwordType = 'password';
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })

    this.inputSearch = new FormControl('');

    this.getInputSearchValues()

  }

  showPassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  private getInputSearchValues() {
    this.inputSearch.valueChanges.pipe(debounceTime(1000), distinctUntilChanged(), tap(console.log)).subscribe();
  }
}
