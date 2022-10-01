import { Component, Input, ViewChild, TemplateRef, AfterViewInit, QueryList, ContentChildren, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ui-tab',
  template: '<ng-template #content><ng-content></ng-content></ng-template>'
})
export class TabComponent {
  @Input() title!: string;
  @ViewChild('content', { static: false }) content!: TemplateRef<any>;
}

@Component({
  selector: 'ui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
