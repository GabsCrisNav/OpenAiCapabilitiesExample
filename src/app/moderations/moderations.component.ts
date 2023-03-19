import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent implements OnInit {
  constructor(private moderations : ModerationsService) {}

  ngOnInit(): void {
  }

  result: string = "";
  phrase: string = "";

  postCompletition() {

      var payload = {
        input: this.phrase
      }

      this.moderations.postCompletion(payload)
      .subscribe((data: any) => {
        //alert(JSON.stringify(data));
        console.log(data);
        this.result = data;
      });
  }

}
