import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';
import { ProfileComponent } from './../profile/profile.component';

@Component({
  selector: 'MyHome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private common: CommonService) {}

  tracks: any = [];

  ngOnInit(): void {
    this.loadTracks();
  }

  loadTracks() {
    this.common.get().subscribe((res) => {
      this.tracks = res;
    });

    this.common.getSavedLocalTrack()
  }

  selectTrack(index: number) {
    let title = this.tracks[index].title;
    let image = this.tracks[index].image;
    let duration = this.tracks[index].duration;
    let track = this.tracks[index].src;
    this.common.trackDetails(title, duration, image, track);
    this.common.playTrack()
  }

}
