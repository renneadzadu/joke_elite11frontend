import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes-detail',
  templateUrl: './jokes-detail.component.html',
  styleUrls: ['./jokes-detail.component.css']
})
export class JokesDetailComponent implements OnInit {

  joke = new Joke(); /// need a joke object
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
  
    viewJokeButton(){
        this.jokeService.viewJoke(this.id, this.joke).subscribe(
          data =>{
            this.router.navigate(['jokes']);
          },
          error => console.log(error)
        );
    }

}
