import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}></Movie>)
            ) : (
                <h4 className="red-text text-darken-4">Not found :(</h4>
            )}
        </div>
    );
}

export { Movies };