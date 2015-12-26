// ombd api documentation is available here:
// http://www.omdbapi.com/

/**
 * app.getMovieById
 * @param id    - omdb id of the movie you're searching for
 */




  app.getMovieById = function getMovieById(id) {

    console.log("app.getMovieById() has been called. nothing happens. wait.. some tumbleweeds are tumbling by! an ID of '" + id + "' was entered.");

    //tt0278488 //how high ID
    //tt0112573 //braveheart
    $.getJSON('http://www.omdbapi.com/?i='+id+'&plot=short&r=json',
    function(data){
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

  $.getJSON('http://www.omdbapi.com/?t='+title+'&y=&plot=short&r=json',
  function(data){
    var movie = new app.MovieModel(data);
    console.log(movie);
    var view = new app.MovieView(movie);
  }
  )



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
  this.test = function(){
    console.log('movie model function');
  }


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

  // this.render = function(){
  render();
  function render(){
    console.log('xxx render function');


    var newContent = document.createTextNode('id: '+ options.id+ ''
    +'title: '+ options.title + ';'
    +'rating: '+ options.rating + ';'
    +'director: '+ options.director + ';'
    +'plot: '+ options.plot + ';'
    +'year: '+ options.year + ';'
    +'genre: '+ options.genre + ';'
     );
     var newDiv = document.createElement('div');
     newDiv.className = 'movie';
     newDiv.appendChild(newContent);
     document.getElementById('movie-listing').appendChild(newDiv);

  }



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


//////////NOTES

  // var newDiv = document.createElement('div');
  // newDiv.className = 'movie';

//FOREACH
//     for (var property in options) {
//     if (options.hasOwnProperty(property)) {
//         console.log(property);
//         var newContent = document.createTextNode(property + 'test');
//         newDiv.appendChild(newContent);
//     }
// }

  // for (i=0; i< Object.keys(options).length; i++){
  //   var newContent = document.createTextNode('id: '+ options.id)
  //   newDiv.appendChild(newContent);
  // }
  // console.log(Object.keys(options).length);

  // for (var property in options) {
  //   if (options.hasOwnProperty(property)) {
  //           console.log(options.property);
  //
  //           // var newContent = document.createTextNode(property + options.property);
  //           // newDiv.appendChild(newContent);
  //           // document.getElementById('movie-listing').appendChild(newDiv);
  //     }
  // }
