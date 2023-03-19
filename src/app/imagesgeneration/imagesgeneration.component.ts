import { Component,OnInit } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';
@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent implements OnInit{
  constructor(private imagesgeneration : ImagesgenerationService) {}

  ngOnInit(): void {
  }

  result: string = "";
  phrase: string = "";

  postCompletition() {

      var payload = {
        prompt: this.phrase,
        n: 1,
        size: "1024x1024"
      }

      this.imagesgeneration.postCompletion(payload)
      .subscribe((data: any) => {
        //alert(JSON.stringify(data));
        console.log(data);
        console.log(data.data[0].url);
        this.result = data.data[0].url;
      });
  }
}
