import './Card.css'
import { Link } from 'react-router-dom'
import { supabase } from '../client.js'
export function Card( {id, name, desc, url ,imageURL} ) {
    const openExternal = () => {
        const fullUrl = url.startsWith("http") ? url : `https://${url}`;
        window.open(fullUrl, "_blank", "noopener,noreferrer");
    };
    async function deleteCreator(id) {
        const { error } = await supabase
          .from('Creators')
          .delete()
          .eq('id', id);
      
        if (error) {
          console.error('Error deleting creator:', error);
        } else {
            console.log('Creator deleted successfully');
            window.location.reload();
        }
      }
    return (
        <>
        
        <div className="Card-container">
        <Link to={`/viewCreator/${id}`} className="Card-link">
            <p>Name: {name}</p>
            <p>Desc: {desc}</p>
            <img src={imageURL} alt={name} />
            <br />
            <span onClick={openExternal}>
            Visit Content
            </span>
            
        </Link>
        <div className="button-wrap">
            <button><Link to={`/editCreator/${id}`}>Edit</Link></button>
            <button
            onClick={() => {
                if (window.confirm(`Are you sure you want to delete ${name}?`)) {
                deleteCreator(id);
                }
            }}
            >
            Delete
            </button>
        </div>
        </div>
        </>
      );
}