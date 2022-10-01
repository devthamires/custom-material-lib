import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'ui-progress-bar',
  templateUrl: './ui-progress-bar.component.html',
  styleUrls: ['./ui-progress-bar.component.scss']
})
export class UiProgressBarComponent implements OnInit {

  @Input() mode: ProgressBarMode = 'determinate';
  @Input() value: number = 40;
  @Input() bufferValue: number = 60;
  @Input() color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
