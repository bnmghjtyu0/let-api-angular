import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //使用 OnPush 策略，預設為 Default
})
export class ChildComponent implements OnInit {
  @Input() data: any;
  constructor(private changeDetectorRef:ChangeDetectorRef) {}
  ngOnInit(): void {
    setInterval(() => {
      //更新
      this.changeDetectorRef.markForCheck();
    }, 0);
  }
}
