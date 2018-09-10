import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 id:any;
 sub:any;
  constructor(private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.sub=this.route.params.subscribe(params=>{
      this.id=params['id'];
    
    });
  }

}
