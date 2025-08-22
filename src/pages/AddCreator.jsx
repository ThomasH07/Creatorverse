import { supabase } from '../client.js'
import { useState } from "react";
import './input.css'
import { useNavigate } from "react-router-dom";
export default function AddCreator() {
    const [name, setName] = useState(null);
    const [url, setUrl] = useState(null);
    const [desc, setDesc] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();  
        const { error } = await supabase
          .from("Creators")
          .insert([{ name, desc, url, imageURL }]);
    
        if (error) {
          console.error(error);
        } else {
          console.log("Creator added!");

          setName("");
          setDesc("");
          setUrl("");
          setImageURL("");

          navigate("/ShowCreators"); 
        }
      }

    return (

        <form onSubmit={handleSubmit} className="form">
        <input 
          type="text" 
          placeholder="Creator name" 
          value={name ?? ""} 
          onChange={(e) => setName(e.target.value)} 
        />
  
        <input 
          type="text" 
          placeholder="Description" 
          value={desc ?? ""} 
          onChange={(e) => setDesc(e.target.value)} 
        />
  
        <input 
          type="text" 
          placeholder="URL" 
          value={url ?? ""} 
          onChange={(e) => setUrl(e.target.value)} 
        />
  
        <input 
          type="text" 
          placeholder="Image URL" 
          value={imageURL ?? ""} 
          onChange={(e) => setImageURL(e.target.value)} 
        />
        <button type="submit">
            Add Creator
        </button>
        
      </form>
      
    );
}