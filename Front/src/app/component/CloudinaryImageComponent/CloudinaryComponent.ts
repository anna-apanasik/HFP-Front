import {Component, EventEmitter, Output} from "@angular/core";
import {CloudinaryImageComponent, CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';

@Component({
  selector: 'app-cloudinary',
  templateUrl: './CloudinaryComponent.html',
  styleUrls: ["./CloudinaryComponent.css"]
})
export class CloudinaryComponent {

  static readonly UNKNOWM_PROFILE_IMAGE = "http://res.cloudinary.com/crowbanding/image/upload/c_lfill,h_300,q_100,r_0,w_200/a_0/sy6afdedllqhpbh8zebq.jpg";

  @Output() upImgStep: EventEmitter<any> = new EventEmitter();
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({cloudName: 'crowbanding', uploadPreset: 'f4k1c585'})
  );

  constructor() {

    this.uploader.onAfterAddingFile = (item: any) => {
      this.uploader.uploadAll();
      return item;
    };

    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      this.upImgStep.emit(JSON.parse(response).public_id);
      console.log('it public url: ' + JSON.parse(response).public_id);
      return {item, response, status, headers};
    };
  }
}
