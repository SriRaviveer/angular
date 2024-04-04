import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[];
  constructor(private fs:FoodService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
     params['searchItem']?
      this.foods=this.fs.getAll().filter(food=>food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()))
      :(params['tagItem'])?
      this.foods=this.fs.getAllFoodItemsByTag(params['tagItem'])
      : this.foods=this.fs.getAll();
    })
   
  }

}
