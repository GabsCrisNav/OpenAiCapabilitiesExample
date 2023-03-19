import { Component, OnInit } from '@angular/core';
import { Textdavinci001Service } from '../services/textdavinci001.service';

@Component({
  selector: 'app-textdavinci001',
  templateUrl: './textdavinci001.component.html',
  styleUrls: ['./textdavinci001.component.css']
})

export class Textdavinci001Component implements OnInit {
  constructor(private textdavinci001 : Textdavinci001Service) {}

  ngOnInit(): void {
  }

  result: string = "";
  phrase: string = "";

  postCompletition() {

      var payload = {
        model: "text-davinci-edit-001",
        input: this.phrase,
        instruction: "Fix the spelling mistakes"
      }

      this.textdavinci001.postCompletion(payload)
      .subscribe((data: any) => {
        //alert(JSON.stringify(data));
        console.log(data);
        this.result = data.choices[0].text;
      });
  }

}
