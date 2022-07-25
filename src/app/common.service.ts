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
  playTrack() {
    this.audio.src = this.selectedTrack.src;
    this.audio.load();
    this.audio.play();
    localStorage.setItem('track', JSON.stringify(this.selectedTrack));
  }
  getSavedLocalTrack() {
    let savedTrack = JSON.parse(localStorage.getItem('track'));
    this.trackDetails(
      savedTrack.title,
      savedTrack.duration,
      savedTrack.image,
      savedTrack.src
    );
  }

  updateCurrentTime(clickedTime: number) {
    let times = {
      current: this.audio.currentTime,
      duration: this.audio.duration,
    };
    this.audio.currentTime = clickedTime;
    return times;
  }

  onVolChange(value: number) {
    this.audio.volume = value;
  }

  toggleTrackState() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
