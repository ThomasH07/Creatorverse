import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import './ViewCreator.css';

export default function ViewCreator() {
    const { id } = useParams(); 
    const [creator, setCreator] = useState(null);
  
    useEffect(() => {
      async function fetchCreator() {
        const { data, error } = await supabase
          .from("Creators")
          .select("*")
          .eq("id", id)
          .single();    
  
        if (error) console.error(error);
        else setCreator(data);
      }
  
      fetchCreator();
    }, [id]);
  
    if (!creator) return <h1>Loading...</h1>;
    return (    
      <div className = "container">
        <h1>{creator.name}</h1>
        <h2>{creator.desc}</h2>
        <img src={creator.imageURL} alt={creator.name} />
        <br />
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          Visit Content
        </a>
      </div>
    );
  }