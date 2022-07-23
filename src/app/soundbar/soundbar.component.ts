import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'MySoundbar',
  templateUrl: './soundbar.component.html',
  styleUrls: ['./soundbar.component.css'],
})
export class SoundbarComponent implements OnInit {
  constructor(public common: CommonService) {}

  ngOnInit(): void {

  }
  selectedTrack = this.common.selectedTrack;
  progressTime = 0

  updateProgress(progressTime){
    this.common.updateCurrentTime(progressTime)
  }

  trackDuration = 100
  getMaxValue(){
  this.trackDuration = this.common.getMaxValue()
  }

  volume = localStorage.getItem('volume')
  inputtedVol(value) {
    this.common.onVolChange(value)
    localStorage.setItem('volume', value)
  }

}
