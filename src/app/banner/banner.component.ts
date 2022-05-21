import { Component, Input, OnInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() herofirst:string;
  constructor(private _pop:ApiCallerService) { }

  ngOnInit(): void {
     this._pop.get_api_result(this.herofirst).subscribe(
     (responce)=>{
       console.log("tygi"+responce);
         this.arraybanner.push(responce);
     },(error)=>{
         console.log("Error aa gy i bhai",error);
     })
 }

  arraybanner=[ 
   
    ]
  



}