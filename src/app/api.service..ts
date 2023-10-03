import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private API_URL = 'https://swapi.dev/api'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  // criando metodo para buscar todos usuarios
  getFilms(formData: any): Promise<any> {
    const endPoint = `${this.API_URL}/films/?search=${formData.name}`;
    return this.http.get(endPoint).toPromise()
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  // função para chamr as naves
  getStarships(): Promise<any> {
    const endPoint = `${this.API_URL}/starships/`;
    return this.http.get(endPoint).toPromise()
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  paginate(url: any): Promise<any> {
    const url_paginate = `${url}`;
    return this.http.get(url_paginate).toPromise()
      .then(response => {
        return response;
      })
    .catch(error => {
      return Promise.reject(error);
    });
  }

}