// cgpa-calculator.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cgpa-calculator',
  templateUrl: './cgpa-calculator.component.html',
  styleUrls: ['./cgpa-calculator.component.css']
})
export class CgpaCalculatorComponent implements OnInit {
  @ViewChild('alertSound') alertSoundRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('confirmSound') confirmSoundRef!: ElementRef<HTMLAudioElement>;

  semesters: (number | null)[] = [null, null, null, null, null, null, null, null];
  result: string = '';
  resultColor: string = '';

  ngOnInit() {
    // You can preload the audio here if needed
  }

  calculate() {
    const marks = this.semesters.map(semester => parseFloat(String(semester)));

    if (marks.some(mark => isNaN(mark) || mark < 1 || mark > 10)) {
      this.result = 'Enter Value Between 1-10';
      this.resultColor = 'red';
      this.playAlertSound();
    } else {
      const cgpa = (((marks[0] + marks[1]) / 2) + ((marks[2] + marks[3]) / 2) + (1.5 * ((marks[4] + marks[5]) / 2)) + (1.5 * ((marks[6] + marks[7]) / 2))) / 5;
      this.result = `Your CGPA is: ${cgpa.toFixed(2)}`;
      this.resultColor = '#333';
      this.playConfirmSound();
    }
  }

  clearFields() {
    this.semesters = [null, null, null, null, null, null, null, null];
    this.clearResult();
  }

  clearResult() {
    this.result = '';
    this.resultColor = '';
  }

  playAlertSound() {
    const alertSound = this.alertSoundRef.nativeElement;
    alertSound.play();
  }

  playConfirmSound() {
    const confirmSound = this.confirmSoundRef.nativeElement;
    confirmSound.play();
  }
}
