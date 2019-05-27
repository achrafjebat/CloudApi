import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

GetData(id: number = 1)
{
   return this.http.get<IActor>(` http://api.tvmaze.com/people/${id}`)
}
}

export interface ICountry {
  name: string;
  code: string;
  timezone: string;
}

export interface IImage {
  medium: string;
  original: string;
}
export interface ISelf {
  href: string;
}

export interface ILinks {
  self: ISelf;
}

export interface IActor {
  id: number;
  url: string;
  name: string;
  country: ICountry;
  birthday: string;
  deathday?: any;
  gender: string;
  image: IImage;
  _links: ILinks;
}

export interface Searchperson {
  score: number;
  person: IActor;
}
