import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'MySoundbar',
  templateUrl: './soundbar.component.html',
  styleUrls: ['./soundbar.component.css'],
})
export class SoundbarComponent implements OnInit, AfterViewInit {
  constructor(public common: CommonService) {}
  ngOnInit(): void {}

  selectedTrack = this.common.selectedTrack;
  progressTime = 0;
  trackDuration = 100;

  updateProgress(progressTime) {
    let times = this.common.updateCurrentTime(progressTime);
    this.trackDuration = times.duration;
    this.progressTime = times.current;
  }

  convertTime() {
    let time = Math.round(this.common.audio.currentTime);
    let min = Math.floor(time / 60);
    let sec = time % 60;

    if (min < 10 && sec < 10) {
      let convertedTime = '0' + min + ':' + '0' + sec;
      return convertedTime;
    } else if (min < 10) {
      let convertedTime = '0' + min + ':' + sec;
      return convertedTime;
    }

    if (min >= 10 && sec < 10) {
      let convertedTime = min + ':' + '0' + sec;
      return convertedTime;
    } else if (min >= 10) {
      let convertedTime = min + ':' + sec;
      return convertedTime;
    }
    // working!!
  }

  volume;
  inputtedVol() {
    this.common.onVolChange(this.volume);
    localStorage.setItem('volume', this.volume);
    console.log('saved', this.volume)
  }

  ngAfterViewInit() {
    let savedVolume = parseInt(localStorage.getItem('volume'))
    this.common.onVolChange(savedVolume)
    this.volume = savedVolume
    console.log('getted', savedVolume)
  }
}
