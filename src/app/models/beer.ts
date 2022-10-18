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
          "ibu": number,
          "target_fg": number,
          "target_og": number,
          "ebc": number,
          "srm": number,
          "ph": number,
          "attenuation_level": number,
          "volume": {
            "value": number,
            "unit": string,
          },
          "boil_volume": {
            "value": number,
            "unit": string,
          },
          "method": {
            "mash_temp": [
              {
                "temp": {
                  "value": number,
                  "unit": string,
                },
                "duration": number,
              }
            ],
            "fermentation": {
              "temp": {
                "value": number,
                "unit": string,
              }
            },
          },
          "ingredients": {
            "malt": any
            "hops": any 
            "yeast": any
          },
          "food_pairing": any[] | string,
          "brewers_tips": any[] | string,
          "contributed_by": any[] | string,
        
}
