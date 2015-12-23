// ombd api documentation is available here:
// http://www.omdbapi.com/

/**
 * app.getMovieById
 * @param id    - omdb id of the movie you're searching for
 */




  app.getMovieById = function getMovieById(id) {

    console.log("app.getMovieById() has been called. nothing happens. wait.. some tumbleweeds are tumbling by! an ID of '" + id + "' was entered.");

    //tt0278488 //how high ID
    $.getJSON('http://www.omdbapi.com/?i='+id+'&plot=short&r=json',
    function(data){
      // console.log('omdb ajax works');
      var movie = new app.MovieModel(data);
      console.log(movie);
      var view = new app.MovieView(movie);
    }
    )

    // 1. create your ajax request and then in your success method.
    // 2. you should create a new MovieModel object based on the returned
    // result.
    // var movie = new app.MovieModel(data);
    // 3. you should create a new MovieView object based on movie model
    // 4. you call render() on the view
    // 5. your render() should append the `$el` to the DOM

  }


/**
 * app.getMovieByTitle
 * @param title     - title of the movie you're searching for
 */
app.getMovieByTitle = function getMovieByTitle(title) {

  console.log("app.getMovieByTitle() has been called. the form stares at you blankly. wait, what? A title of '" + title + "' was entered");

  // request URL for omdb's title search:
  //http://www.omdbapi.com/?t=Die+Hard&y=1988&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM


}


/**
 * app.MovieModel
 * movie model constructor
 * @param options  - options object
 */
app.MovieModel = function MovieModel(options) {

  this.id = options.imdbID;
  this.title = options.Title;
  this.rating = options.Rated;
  this.director = options.Director;
  this.plot = options.Plot;
  this.year = options.Year;
  this.genre = options.Genre;


  // id, title, rating, director, plot, year, genre should all be in the `options` object
  // store all the information in the model

}

/**
 * app.MovieView
 * movie view constructor
 * @param options  - options object
 */
app.MovieView = function MovieView(options) {
  // options should contain the `model` for which the view is using

  //DRAFT TWO
  this.render = function(){
    console.log('method runssssss');
    var newDiv = document.createElement('div');
    newDiv.className = 'movie';
    var newContent = document.createTextNode('id: '+ id+ ''
    +'<br>'+'title: '+ title + ';'
    +'<br>'+'rating: '+ rating + ';'
    +'<br>'+'director: '+ director + ';'
    +'<br>'+'pot: '+ plot + ';'
    +'<br>'+'year: '+ year + ';'
    +'<br>'+'genre: '+ genre + ';'
     );
       newDiv.appendChild(newContent);
       document.getElementById('movie-listing').appendChild(newDiv);

  }

  //END DRAFT TWO

  ////DRAFT ONE
  // var movie = {
  //   id: options.imdbID,
  //   title: options.Title,
  //   rating: options.Rated,
  //   director: options.Director,
  //   plot: options.Plot,
  //   year: options.Year,
  //   genre: options.Genre,
  //   render: function(){
  //     console.log('method runssssss');
  //     var newDiv = document.createElement('div');
  //     newDiv.className = 'movie';
  //     var newContent = document.createTextNode('id: '+ id+ '; '
  //     +'<br>'+'title: '+ title + ';'
  //     +'<br>'+'rating: '+ rating + ';'
  //     +'<br>'+'director: '+ director + ';'
  //     +'<br>'+'pot: '+ plot + ';'
  //     +'<br>'+'year: '+ year + ';'
  //     +'<br>'+'genre: '+ genre + ';'
  //   );
  //     newDiv.appendChild(newContent);
  //     document.getElementById('movie-listing').appendChild(newDiv);
  //   }
  // }
/////END DRAFT ONE

  // 1. create a view
  // 2. create a render() method
  // 3. render() should a div with a class of '.movie' via string concatenation
  //    you will want to add the id, title, rating, director, plot, year,
  //    and genre. See design/movielayout.html
  // 4. finally, render() will $(selector).append() each new '.movie' to "#movie-listing".
}

  $(document).ready(function() {
    console.log('jquery runs');

  });
