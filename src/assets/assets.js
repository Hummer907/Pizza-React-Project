import basket_icon from './pizza-assets/basket_icon.png'
import logo from './pizza-assets/logo.png'
import header_img from './pizza-assets/header_img.png'
import search_icon from './pizza-assets/search_icon.png'
import menu_1 from './pizza-assets/menu_1.png'
import menu_2 from './pizza-assets/menu_2.png'
import menu_3 from './pizza-assets/menu_3.png'
import menu_4 from './pizza-assets/menu_4.png'
import menu_5 from './pizza-assets/menu_5.png'
import menu_6 from './pizza-assets/menu_6.png'
import menu_7 from './pizza-assets/menu_7.png'
import menu_8 from './pizza-assets/menu_8.png'

import food_1 from './pizza-assets/food_1.png'
import food_2 from './pizza-assets/food_2.png'
import food_3 from './pizza-assets/food_3.png'
import food_4 from './pizza-assets/food_4.png'
import food_5 from './pizza-assets/food_5.png'
import food_6 from './pizza-assets/food_6.png'
import food_7 from './pizza-assets/food_7.png'
import food_8 from './pizza-assets/food_8.png'
import food_9 from './pizza-assets/food_9.png'
import food_10 from './pizza-assets/food_10.png'



import add_icon_white from './pizza-assets/add_icon_white.png'
import add_icon_green from './pizza-assets/add_icon_green.png'
import parcel_icon from './pizza-assets/parcel_icon.png'
import logout_icon from './pizza-assets/logout_icon.png'
import bag_icon from './pizza-assets/bag_icon.png'
import profile_icon from './pizza-assets/profile_icon.png'
import rating_starts from './pizza-assets/rating_starts.png'
import cross_icon from './pizza-assets/cross_icon.png'
import selector_icon from './pizza-assets/selector_icon.png'
import twitter_icon from './pizza-assets/twitter_icon.png'
import facebook_icon from './pizza-assets/facebook_icon.png'
import linkedin_icon from './pizza-assets/linkedin_icon.png'
import play_store from './pizza-assets/play_store.png'
import app_store from './pizza-assets/app_store.png'
import remove_icon_red from './pizza-assets/remove_icon_red.png'

export const assets = {
    add_icon_white,
    add_icon_green,
    parcel_icon,
    logout_icon,
    bag_icon,
    profile_icon,
    rating_starts,
    cross_icon,
    selector_icon,
    twitter_icon,
    facebook_icon,
    linkedin_icon,
    play_store,
    app_store,
    remove_icon_red,

    basket_icon,
    logo,
    header_img,
    search_icon,

}

export const menu_list = [


    {
        menu_name : "Salad",
        menu_img : menu_1
    },

    {
        menu_name : "Rolls",
        menu_img : menu_2
    },
    {
        menu_name : "Desert",
        menu_img : menu_3
    },
    {
        menu_name : "Sandwich",
        menu_img : menu_4
    },
    {
        menu_name : "Cake",
        menu_img : menu_5
    },
    {
        menu_name : "Breakfast",
        menu_img : menu_6
    },
    {
        menu_name : "Vegetarian",
        menu_img : menu_7
    },
    {
        menu_name : "Soups",
        menu_img : menu_8
    },




]

 const  food_list_img =[food_1,food_2,food_3,food_4,food_5,food_6,food_7,food_8,food_9,food_10];
const foodCategories = ['Salad', 'Rolls', 'Desert', 'Sandwich', 'Cake', 'Soups'];

// Function to generate a random food category
const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * foodCategories.length);
  return foodCategories[randomIndex];
};

// Generate array of food objects
const generateFoodList = (count) => {
  const foodList = [];

  for (let i = 1; i <= count; i++) {
    const foodItem = {
      id: i,
      name: `Food ${i}`,
      price: Math.floor(Math.random() * 20) + 5, // Random price between 5 and 25
      description: `Description for Food ${i}`,
      category: getRandomCategory(),
      img: food_list_img[i]
    };
    foodList.push(foodItem);
  }

  return foodList;
};
// Generate food list with 10 items
  export const food_list = generateFoodList(10);

