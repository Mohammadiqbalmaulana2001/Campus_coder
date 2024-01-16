const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    director: String,
    rating: Number,
})

const Movie = mongoose.model('Movie', movieSchema);

// Movie.find({genre : {$gte : 'Crime'}}).then(data => console.log(data)).catch(err => console.log(err))


// Movie.findById('65a6763eca0e441f84d71f5a').then(data => console.log(data)).catch(err => console.log(err))


Movie.findByIdAndUpdate('65a6763eca0e441f84d71f58', { rating: 9 })
  .then(data => console.log(data))
  .catch(err => console.log(err));


// const movie= new Movie(
//     {
//         title: 'Titanic',
//         year: 1997,
//         genre: 'Romance',
//         director: 'James Cameron',
//         rating: 7.9,
//     }
// )

// Movie.insertMany(
//     [
//         {
//             "title": "Black Panther",
//             "year": 2018,
//             "genre": "Action",
//             "director": "Ryan Coogler",
//             "rating": 7.3,
//         },
//         {
//             "title": "Avengers: Infinity War",
//             "year": 2018,
//             "genre": "Action",
//             "director": "Anthony Russo, Joe Russo",
//             "rating": 8.4,
//         },
//         {
//             "title": "Joker",
//             "year": 2019,
//             "genre": "Crime",
//             "director": "Todd Phillips",
//             "rating": 8.4,
//         },
//         {
//             "title": "Parasite",
//             "year": 2019,
//             "genre": "Drama",
//             "director": "Bong Joon Ho",
//             "rating": 8.6,
//         },
//         {
//             "title": "Spider-Man: Into the Spider-Verse",
//             "year": 2018,
//             "genre": "Animation",
//             "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//             "rating": 8.4,
//         }
//     ]
// ).then((result) => {
//     console.log('Data Inserted...');
//     console.log(result)
// })
// .catch(err => console.log(err))