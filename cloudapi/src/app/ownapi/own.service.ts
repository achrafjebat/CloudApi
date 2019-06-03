import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnService {

  constructor(private http : HttpClient) { }
  getdata()
  {
     return this.http.get<Imodel[]>(` https://localhost:5001/api/Modellen/`)
  }
  Searchid(modelid: number)
{
   return this.http.get<Imodel>(`  https://localhost:5001/api/Modellen/${modelid}`)
}

}
export interface Imodel {
  id: number;
  naam: string;
  carroserievorm: string;
  motor: string;
  vermogen: string;
  brandstof: string;
  merkId: number;
  merk?: any;
}
