import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-update-jokes',
  templateUrl: './update-jokes.component.html',
  styleUrls: ['./update-jokes.component.css']
})
export class UpdateJokesComponent implements OnInit {

 
joke = new Joke();
id: any;

  constructor(private jokeService: JokeService, private router: Router, private actiavtedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actiavtedRoute.snapshot.params[`id`]; // id in the url

    this.jokeService.getJokeById(this.id).subscribe(
      data =>{
        this.joke = data;
      }
    );
    
  }

  editJokeButton(){
      this.jokeService.updateJoke(this.id, this.joke).subscribe(
        data =>{
          this.router.navigate(['jokes']);
        },
        error => console.log(error)
      );
  }
    }
