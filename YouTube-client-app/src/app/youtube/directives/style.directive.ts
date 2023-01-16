import {
  Directive, ElementRef, Input, OnChanges, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyles]',
})

export class StylesDirective implements OnChanges {
  @Input() publishedDate!: string;

  color:string = '';

  constructor(private elemRef:ElementRef, private rend:Renderer2) {
  }

  ngOnChanges(): void {
    this.rend.setStyle(this.elemRef.nativeElement, 'borderBottom', `10px solid ${this.getColor}`);
  }

  get getColor() {
    const dateFull = new Date().getTime();
    const VideoDateFull = new Date(this.publishedDate).getTime();
    const timeOneDay = 60 * 60 * 24 * 1000;
    const resultDay = Math.round((dateFull - VideoDateFull) / timeOneDay);
    if (resultDay > 180) {
      this.color = 'red';
    }
    if (resultDay >= 30 && resultDay <= 180) {
      this.color = 'yellow';
    }
    if (resultDay < 30 && resultDay > 7) {
      this.color = 'blue';
    }
    if (resultDay <= 7) {
      this.color = 'green';
    }
    return this.color;
  }
}
