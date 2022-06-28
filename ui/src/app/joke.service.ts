import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  
  constructor(private httpClient:HttpClient) { }

getAllJokes(): Observable<Joke[]>{
  return this.httpClient.get<Joke[]>(`http://localhost:8080/jokes`);
}


addJoke(joke: Joke){
   return this.httpClient.post<Joke>(`http://localhost:8080/jokes`, joke);
}

deleteJokeById(id: number){
  return this.httpClient.delete<Joke>(`http://localhost:8080/jokes/${id}`);
}

//get by id

//edit
updateJoke(id:any, joke:Joke): Observable<any>{
  return this.httpClient.put<any>(`http://localhost:8080/jokes/${id}`, joke);

}

getJokeById(id: any): Observable<any>{
  return this.httpClient.get<Joke>(`http://localhost:8080/jokes/${id}`);
}

viewJoke(id:any, joke: Joke): Observable<any> {
  return this.httpClient.put<any>(`http://localhost:8080/jokes/${id}`, joke); 
}

}
