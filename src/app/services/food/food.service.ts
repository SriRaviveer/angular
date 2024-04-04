import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodItemsByTag(tagItem:string):Foods[]{
    return tagItem=='All' ?
    this.getAll() : this.getAll().filter(food=>food.tags?.includes(tagItem))

  }
  getAllTags():Tag[]{
    return[
      {name:'All',count:10},
      {name:'Lunch',count:4},
      {name:'Fry',count:1},
      {name:'FastFood',count:5},
      {name:'Dessert',count:2},
      {name:'Dinner',count:1},
      {name:'Rice',count:1},
      {name:'Biryani',count:1},
      {name:'Hamburger',count:1},
      {name:'Pizza',count:1},
      {name:'Starter',count:2},
    ]
  }
  getAll():Foods[]{
    return [
     {
      id:1,
    price:450,
    name:'Pizza',
    favourite:false,
    rating:4,
    tags:['FastFood','Pizza','Lunch'],
    imageUrl:'/assets/food1.jpg',
    cookTime:'30-40',
    orgins:['Italy'],
     },
     {
      id:2,
    price:300,
    name:'Chicken Lollipop',
    favourite:false,
    rating:3.5,
    tags:['FastFood','Starter','Lunch'],
    imageUrl:'/assets/food2.jpg',
    cookTime:'30-40',
    orgins:['Indo-Chinese'],
     },
     {
      id:3,
    price:100,
    name:'Burger',
    favourite:false,
    rating:3,
    tags:['FastFood','Hamburger'],
    imageUrl:'/assets/food3.jpg',
    cookTime:'30-40',
    orgins:['Germany','Us'],
     },
     {
      id:4,
    price:140,
    name:'Chocolate-Icecream',
    favourite:true,
    rating:4,
    tags:['Dessert'],
    imageUrl:'/assets/food4.jpg',
    cookTime:'30-40',
    orgins:['China'],
     },
     {
      id:5,
    price:110,
    name:'French Fries',
    favourite:false,
    rating:4,
    tags:['FastFood','Fry'],
    imageUrl:'/assets/food5.jpg',
    cookTime:'10-15',
    orgins:['Belgium','France'],
     },
     {
      id:6,
    price:100,
    name:'Gulab Jamun',
    favourite:true,
    rating:4.5,
    tags:['Dessert'],
    imageUrl:'/assets/food6.jpg',
    cookTime:'20-30',
    orgins:['India'],
     },
     {
      id:7,
    price:320,
    name:'Chicken 555',
    favourite:false,
    rating:4,
    tags:['FastFood','Starter','Lunch'],
    imageUrl:'/assets/food7.jpg',
    cookTime:'30-40',
    orgins:['India'],
     },
     {
      id:8,
    price:300,
    name:'Chicken Special Boneless Biryani',
    favourite:true,
    rating:5,
    tags:['Rice','Biryani','Lunch','Dinner'],
    imageUrl:'/assets/food8.jpg',
    cookTime:'30-40',
    orgins:['India','Pakistan','Afghanistan','Bangladesh','Iran','Iraq'],
     },
    ]
  }
}
