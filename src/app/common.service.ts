import { Injectable, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.onVolChange()
  }

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

  playTrack() {
    this.audio.src = this.selectedTrack.src;
    this.audio.load();
    this.audio.play();
    this.audio.volume = parseInt(localStorage.getItem('volume'))
  }

  updateCurrentTime(clickedTime: number) {
    let times = {
      current: this.audio.currentTime,
      duration: this.audio.duration,
    };
    this.audio.currentTime = clickedTime;
    return times;
  }

  getSavedLocalTrack() {
    let saved = JSON.parse(localStorage.getItem('track'));
    this.trackDetails(saved.title, saved.duration, saved.image, saved.src);
  }

  onVolChange(value?: number) {
    this.audio.volume = value;
    localStorage.setItem('track', JSON.stringify(this.selectedTrack));
  }
  pauseTrack() {
    this.audio.pause();
  }
}
