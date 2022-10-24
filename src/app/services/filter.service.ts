import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filters: any = 
  {
    hops: [
      { name: 'AMARILLO', value: 'Amarillo'},
      { name: 'CITRA', value: 'Citra'},
      { name: 'MAGNUM', value: 'Magnum'},
      { name: 'MOSAIC', value: 'Mosaic'},
      { name: 'Perle', value: 'Perle'},
      { name: 'SIMCOE', value: 'Simcoe'},
      { name: 'SAAZ', value: 'Saaz'},
    ],
    malts: [
      { name: 'CARAMALT', value: 'Caramalt'},
      { name: 'CHOCOLATE', value: 'Chocolate'},
      { name: 'EXTRA PALE', value: 'Extra Pale'},
      { name: 'MUNICH', value: 'Munich'},
    ],
  }

  radios: any = {
    "hopsRadio": null,
    "maltsRadio": null
  }

  selectedFilterTags: string[] = []

  constructor() { }
}
