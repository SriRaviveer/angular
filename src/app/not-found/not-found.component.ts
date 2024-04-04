import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{
@Input() visible:boolean=false;
@Input() notFoundMessage:string='Nothind Found';
@Input() resetLinkText:string='Reset';
@Input() resetLinkRoute:string='/';
  constructor(){

}
ngOnInit(): void {
  
}
}
