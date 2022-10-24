export interface Beer {
          "id": string,
          "name": string,
          "price": number,
          "originalPrice": number,
          "badge": boolean,
          "badgeType": number,
          "productOfTheWeek": boolean;
          "isFavourite": boolean;
          "tagline": string,
          "first_brewed": string,
          "description": string,
          "image_url": string,
          "abv": number,
          "ingredients": {
            "malt": any
            "hops": any 
            "yeast": any
          },
          "food_pairing": any[] | string,
          "brewers_tips": any[] | string,
          "contributed_by": any[] | string,      
}
