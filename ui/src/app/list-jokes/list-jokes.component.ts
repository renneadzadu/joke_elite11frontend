import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-list-jokes',
  templateUrl: './list-jokes.component.html',
  styleUrls: ['./list-jokes.component.css']
})
export class ListJokesComponent implements OnInit {

  
  jokes: Joke[] = []; //instance variable

  constructor(private jokeService: JokeService, private router:Router) { } // constructor

  ngOnInit(): void {
    this.fetchJokes();
  }


fetchJokes(){
  this.jokeService.getAllJokes().subscribe(
     data => {
      this.jokes = data;
      console.log(data);
     },
     error => console.log(error)
  );
}


goToEditJoke(id:any){
this.router.navigate(['editjoke',id])
}


deleteJoke(id: any){
  this.jokeService.deleteJokeById(id).subscribe(
     data =>{
       this.fetchJokes(); // refreshing the list
       this.router.navigate(['jokes']);
     },
     error => console.log(error)
  );
}

goToAddJoke(){
  this.router.navigate(['addjoke']);
}


goToViewJoke(id: any){
  this.router.navigate(['viewjoke', id]);
}
}
