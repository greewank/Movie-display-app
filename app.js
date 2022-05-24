const title = document.querySelector('.title');
const director = document.querySelector('.director');
const genre = document.querySelector('.genre');
const plot = document.querySelector('.plot');
const imgs = document.querySelector('.images');
const search = document.querySelector('.search-container');
const search_btn = document.querySelector('.search button');
const moviess = document.querySelector('.movie-container');

let movies =
{
    api_key: '79603bc7',

    fetch_movies : async function(title){
        let receive = await fetch('https://www.omdbapi.com/?apikey='+ this.api_key + '&t='+title); 
        let data = await receive.json();
        this.displayMovies(data);
    },

    displayMovies : function(data){
        const{Title, Director, Plot, Genre} = data;
        const{Poster} = data;
        // console.log(Title,'\n',Plot,'\n',Genre, '\n');

        imgs.src = Poster;

        title.innerText = Title;
        director.innerText = "Director: " +Director;
        genre.innerText = "Genre: " +Genre;
        plot.innerText = "Plot: " +Plot;

        moviess.classList.remove('loading');
    },

    searches : function(){
                    this.fetch_movies(search.value);
    },
};

search_btn.addEventListener('click', ()=>{
    movies.searches();
});

search.addEventListener('keyup', (event)=>{
    if (event.key == "Enter"){
        movies.searches();
    }
})

// The destructuring assignment makes it possible to unpack values from arrays or properties from objects, into distinct variables. 