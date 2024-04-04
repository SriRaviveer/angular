import { Component, Input, OnInit, input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit{
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string='center';
  tags?:Tag[]=[]
  constructor(private fs:FoodService){}
  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags=this.fs.getAllTags()
  }

}
