import { Component, EventEmitter } from '@angular/core';
import { Observable, Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'loading Button';
  countdown$!: Observable<number>;
  countdownValue = 0;
  resetButtonEmitter = new EventEmitter<boolean>(true);

  private countdownSubscription!: Subscription;

  submit() {
    this.startCountdown();
  }

  startCountdown() {
    this.countdownValue = 5;
    this.countdownSubscription = interval(1000)
      .pipe(take(this.countdownValue + 1))
      .subscribe(() => {
        if (this.countdownValue > 0) {
          this.countdownValue--;
        } else {
          this.resetButtonEmitter.emit(true);
          this.countdownSubscription.unsubscribe();
        }
      });
  }

  ngOnDestroy() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}
