import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-clone';
  @Input() dos:string;
  constructor(){

  }
  list_data(){
    const api_key="760fa3efbf87d6ee1b662617eb8b042b";
  }
  List_of_Api_Data={
    fetchTrending:`/trending/all/week?api_key=760fa3efbf87d6ee1b662617eb8b042b&language=en-US`,
    fetchNetflixOrignals:`/discover/tv?api_key=760fa3efbf87d6ee1b662617eb8b042b&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=760fa3efbf87d6ee1b662617eb8b042b&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=760fa3efbf87d6ee1b662617eb8b042b&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=760fa3efbf87d6ee1b662617eb8b042b&with_genres=35`,
    fetchHorrorMovie:`/discover/movie?api_key=760fa3efbf87d6ee1b662617eb8b042b&with_genres=27`,
    fetchRomaceMovie:`/discover/movie?api_key=760fa3efbf87d6ee1b662617eb8b042b&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=760fa3efbf87d6ee1b662617eb8b042b&with_genres=99`
  }
  List_name=[
    "Trending",
    "NetflixOrignals",
    "TopRated",
    "ActionMovie",
    "ComedyMovie",
    "HorrorMovie",
    "RomaceMovie",
    "Documentaries"
  ]
  

  
  

}
