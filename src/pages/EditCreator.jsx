import { supabase } from '../client.js'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './input.css'
export default function EditCreator() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("Creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setName(data.name || "");
        setUrl(data.url || "");
        setDesc(data.desc || "");
        setImageURL(data.imageURL || "");

      }
    }
    fetchCreator();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault(); 
    const { error } = await supabase
      .from("Creators")
      .update({
        name,
        url,
        desc,
        imageURL
      })
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
        console.log("edit successful!")
      navigate(`/ShowCreators`); 
    }
  }

  return (
    <div className="container">
      <h1>Edit Creator</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button type="submit">Update Creator</button>
      </form>
    </div>
  );
}