import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SoundbarComponent } from './soundbar/soundbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes.component';
import { ProfileComponent } from './profile/profile.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SoundbarComponent,
    HeaderComponent,
    HomeComponent,
    LikesComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, RoutingModule, HttpClientModule, FormsModule],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
