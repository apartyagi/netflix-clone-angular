import { Component, OnInit,Input,} from '@angular/core';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() hero:string;
  @Input() title:string;
  constructor(private _pai:ApiCallerService) { }
  baseurl="https://image.tmdb.org/t/p/original/";
  ngOnInit(): void {
      this._pai.get_api_result(this.hero).subscribe(
        (responc)=>{
          this.array.push(responc);
      },(error)=>{
        console.log("Bro error Aa gyi bc",error);
      }
      )
  }
  array=[
 
  ]
}
