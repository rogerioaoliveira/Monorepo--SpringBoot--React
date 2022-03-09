import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {
  
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    const movie2 = {
        id: 2,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hND7xAaxxBgaIspp9iMsaEXOSTz.jpg",
        title: "Gladiator",
        count: 2,
        score: 4.5
    };
    const movie3 = {
        id: 3,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/c9xSFZQtC4c16Vn5CMOaB1pGk9J.jpg",
        title: "The Patriot",
        count: 2,
        score: 4.5
    };
    const movie4 = {
        id: 4,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/1m1c5gIWWkb1FEC9lzsoXHhhs7b.jpg",
        title: "Braveheart",
        count: 2,
        score: 4.5
    };
    const movie5 = {
        id: 5,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/1cO6OQJxz7YhTZ4V1OlkYfebeJa.jpg",
        title: "Armageddon",
        count: 2,
        score: 4.5
    };
    const movie6 = {
        id: 6,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
        title: "The Lord Of The Rings",
        count: 2,
        score: 4.5
    };
    const movie7 = {
        id: 7,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wC36tEU7AqP5llAvjXkZhZ248tX.jpg",
        title: "Rocky",
        count: 2,
        score: 4.5
    };
    const movie8 = {
        id: 8,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vbk5CfaAHOjQPSAcYm6AoRRz2Af.jpg",
        title: "Harry Potter",
        count: 2,
        score: 4.5
    };
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
            <img className="dsmovie-movie-card-image" src={movie2.image} alt={movie2.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie2.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
            <img className="dsmovie-movie-card-image" src={movie3.image} alt={movie3.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie3.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
            <img className="dsmovie-movie-card-image" src={movie4.image} alt={movie4.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie4.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
            <img className="dsmovie-movie-card-image" src={movie5.image} alt={movie5.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie5.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
            <img className="dsmovie-movie-card-image" src={movie6.image} alt={movie6.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie6.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
            <img className="dsmovie-movie-card-image" src={movie7.image} alt={movie7.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie7.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
            <img className="dsmovie-movie-card-image" src={movie8.image} alt={movie8.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie8.title}</h3>
                <MovieScore />
                <Link to={`/form/movie.id`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;