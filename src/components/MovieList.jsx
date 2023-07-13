import React, { useState } from 'react';
import "./Movie.css";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'Avatar 1',
      rating: 4,
      image:
        'https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200',
    },
    {
      id: '2',
      title: 'Kunfu panda',
      rating: 5,
      image:
        'https://upload.wikimedia.org/wikipedia/en/9/99/Kung_Fu_Panda_Game_Cover.jpg',
    },
    {
      id: '3',
      title: 'Naruto Shipuden',
      rating: 5,
      image: 'https://staticg.sportskeeda.com/editor/2021/10/8bbb3-16349088266046-1920.jpg',
    },
    {
      id: '4',
      title: 'Hobbit',
      rating: 5,
      image:
        'https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_QL75_UX190_CR0,0,190,281_.jpg',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    rating: '',
    image: '',
  });

 
  const handleInputChange = (e) => {
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [e.target.name]: e.target.value,
    }));
  };



  const handleAddMovie = () => {
    if (!newMovie.title || !newMovie.rating || !newMovie.image) {
      alert('Please fill in all fields');
      return;
    }

    const id = Date.now().toString();
    const movie = { ...newMovie, id };
    setMovies((prevMovies) => [...prevMovies, movie]);
    setNewMovie({ title: '', rating: '', image: '' });
    setShowModal(false);
  };

  

  const handleDeleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const buttonStyle = {
    backgroundColor: 'maroon',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border:'none',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.26)',
	  cursor: 'pointer',
    marginLeft:'20px'
    
};
const button2Style = {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border:'none',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.26)',
    cursor: 'pointer',
    marginLeft:'20px'
};


  return (
    <div>
      <header>
        <h1>Favorite Movies</h1>
        <button className='add-button' onClick={() => setShowModal(true)}>ADD MOVIE</button>

      </header>
      <main>
      
        <ul id="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-element">
              <div className="movie-element__image">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="movie-element__info">
                <h2>{movie.title}</h2>
                <p>{`${movie.rating}/5 stars`}</p>
                <button style={buttonStyle}
                  onClick={() => handleDeleteMovie(movie.id)}
                >
                  DELETE
                </button>  
                <button style={button2Style}
                  onClick={() =>setShowModal(true)}
                >
                  EDIT
                </button>
            
              </div>
            </li>
          ))}
        </ul>
      
      </main>
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <label htmlFor="title">Movie Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newMovie.title}
              onChange={handleInputChange}
            />
            <label htmlFor="image-url">Image URL</label>
            <input
              type="url"
              name="image"
              id="image-url"
              value={newMovie.image}
              onChange={handleInputChange}
            />
            <label htmlFor="rating">Your Rating</label>
            <input
              type="number"
              step="1"
              max="5"
              min="1"
              name="rating"
              id="rating"
              value={newMovie.rating}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal__actions">
            <button style={buttonStyle} onClick={() => setShowModal(false)}>
              Cancel
            </button>
            <button style={button2Style} onClick={handleAddMovie}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
