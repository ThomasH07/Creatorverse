import './Card.css'
export function Card( {name, link, url, imageUrl} ) {
    return (
        <div className="Card">
            <p>Name: {name} </p>
            <p>link: {link} </p>
            <img src = {imageUrl} alt="creator" />
            <p>url: {url} </p>
        </div>
    );
}