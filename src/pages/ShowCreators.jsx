import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import ViewCreator from './ViewCreator.jsx'
import AddCreator from './AddCreator.jsx'
import { Card } from '../components/Card'
import { supabase } from '../client.js'
import './ShowCreators.css'
export default function ShowCreators() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {

            const {data,error} = await supabase
            .from('Creators')
            .select('*')
            if (error){
                console.error(error);
            }else{
                setData(data);
            }
        }
        fetchData();
      }, []);
    console.log(data);
    return (
      <div className="container">
        
        <Card 
          name="Creator Name 1"
          desc="creator Desc"
          url="creator.com"
          imageUrl="image.jpg"
        />
        <Card 
          name="Creator Name 2"
          desc="creator Desc"
          url="creator.com"
          imageUrl="image.jpg"
        />
                <Card 
          name="Creator Name 3"
          desc="creator Desc"
          url="creator.com"
          imageUrl="image.jpg"
        />
                <Card 
          name="Creator Name 4"
          desc="creator Desc"
          url="creator.com"
          imageUrl="image.jpg"
        />

          <div className="cards-wrapper">
            {data && data.map((creator) => (
            <Card
                key={creator.id}
                name={creator.name}
                link={creator.link}
                url={creator.url}
                imageUrl={creator.imageUrl}
            />
            ))}
        </div>
      </div>
      
    );
}