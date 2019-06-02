import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
SearchShow(showname: string)
{
   return this.http.get<Ishows[]>(` http://api.tvmaze.com/search/shows?q=${showname}`)
}
Searchid(showid: number)
{
   return this.http.get<Ishow>(` http://api.tvmaze.com/shows/${showid}`)
}
Showpage(page : number)
{
   return this.http.get<Ishow[]>(` http://api.tvmaze.com/shows?page=${page}`)
}
}
export interface ISchedule {
  time: string;
  days: string[];
}

export interface IRating {
  average?: number;
}

export interface ICountry {
  name: string;
  code: string;
  timezone: string;
}

export interface INetwork {
  id: number;
  name: string;
  country: ICountry;
}

export interface ICountry2 {
  name: string;
  code: string;
  timezone: string;
}

export interface IWebChannel {
  id: number;
  name: string;
  country: ICountry2;
}

export interface IExternals {
  tvrage: number;
  thetvdb?: number;
  imdb: string;
}

export interface IImage {
  medium: string;
  original: string;
}

export interface ISelf {
  href: string;
}

export interface IPreviousepisode {
  href: string;
}

export interface INextepisode {
  href: string;
}

export interface ILinks {
  self: ISelf;
  previousepisode: IPreviousepisode;
  nextepisode: INextepisode;
}

export interface Ishow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: ISchedule;
  rating: IRating;
  weight: number;
  network: INetwork;
  webChannel: IWebChannel;
  externals: IExternals;
  image: IImage;
  summary: string;
  updated: number;
  _links: ILinks;
}
export interface Ishows {
  score: number;
  show: Ishow;
}

