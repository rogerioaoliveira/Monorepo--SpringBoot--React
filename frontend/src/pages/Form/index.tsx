import { Link } from 'react-router-dom';
import './styles.css'

function Form() {

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
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>    
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >

                <Link to={`/`}>
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >        
    )
}

export default Form