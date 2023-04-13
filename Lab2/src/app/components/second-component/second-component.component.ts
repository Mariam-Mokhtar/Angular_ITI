import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  noImgs = 5;
  interval: any;
  index = 0;
  StopDisabled = true;
  playDisabled = false;
  nextDisabled = false;
  prevDisabled = true;
  imgUrl = `assets/images/${this.index}.jpg`;
  showNextImg() {
    if (this.index < this.noImgs - 1) {
      this.index++;
      this.imgUrl = `assets/images/${this.index}.jpg`;
      if (this.index == this.noImgs - 1) {
        this.nextDisabled = true;
      }
    }
    if (this.index > 0) {
      this.prevDisabled = false;
    }
  }
  showPrevImg() {
    if (this.index == this.noImgs - 1) {
      this.nextDisabled = false;
    }
    if (this.index > 0) {
      this.index--;
      this.imgUrl = `assets/images/${this.index}.jpg`;
      if (this.index == 0) {
        this.prevDisabled = true;
      }
    }
  }

  startAutoSlider() {
    this.interval = setInterval(() => {
      this.index = (this.index + 1) % this.noImgs;
      this.imgUrl = `assets/images/${this.index}.jpg`;
      this.prevDisabled =this.index>0?false:true;
      this.nextDisabled =this.index==this.noImgs - 1?true:false;
    }, 2000);
    this.StopDisabled = false;
    this.playDisabled = true;
  }
  stopAutoSlider() {
    clearInterval(this.interval);
    this.StopDisabled = true;
    this.playDisabled = false;
  }
}
