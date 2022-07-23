import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'MySoundbar',
  templateUrl: './soundbar.component.html',
  styleUrls: ['./soundbar.component.css'],
})
export class SoundbarComponent implements OnInit {
  constructor(public common: CommonService) {}
  ngOnInit(): void {}

  // @ViewChild('progress', { static: false }) progress: ElementRef;

  selectedTrack = this.common.selectedTrack;
  progressTime = 0;
  trackDuration = 100;

  updateProgress(progressTime) {
    let times = this.common.updateCurrentTime(progressTime);
    this.trackDuration = times.duration;
    this.progressTime = times.current;
  }

  convertTime() {
    let time = Math.trunc(this.common.audio.currentTime)
    let min = Math.floor(time / 60);
    let sec = time % 60;

    min = min < 10 ? 0 + min : min;
    sec = sec < 10 ? 0 + sec : sec;

    let convertedTime = min + ":" + sec;
    return convertedTime;
  }



  volume = localStorage.getItem('volume');
  inputtedVol(value) {
    this.common.onVolChange(value);
    localStorage.setItem('volume', value);
  }
}
