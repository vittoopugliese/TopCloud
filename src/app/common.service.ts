import { Injectable, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  tracksUrl =
    'https://raw.githubusercontent.com/vittoopugliese/public-imgs/main/objects.json';

  get() {
    return this.http.get(this.tracksUrl);
  }

  selectedTrack = {
    title: '',
    duration: '',
    image: '',
    src: '',
  };

  trackDetails(title: string, duration: string, image: string, src: string) {
    this.selectedTrack.title = title;
    this.selectedTrack.duration = duration;
    this.selectedTrack.image = image;
    this.selectedTrack.src = src;
  }

  audio = new Audio();
  progressBar
  playTrack() {
    this.progressBar = 0
    this.audio.src = this.selectedTrack.src;
    this.audio.load();
    this.audio.play();

    localStorage.setItem('track', JSON.stringify(this.selectedTrack));
  }

  updateCurrentTime(clickedTime:number) {
    this.audio.currentTime = clickedTime
    return this.audio.currentTime;
  }

  getMaxValue(){
    return this.audio.duration
  }

  getSavedLocalTrack() {
    let saved = JSON.parse(localStorage.getItem('track'));
    this.trackDetails(saved.title, saved.duration, saved.image, saved.src);
  }

  onVolChange(value: number) {
    this.audio.volume = value;
  }
  pauseTrack() {
    this.audio.pause();
  }
}
