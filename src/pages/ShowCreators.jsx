import { useEffect, useState } from "react";
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
    // console.log(data);
    return (
      <div className="container">
        
        {data && data.length > 0 ? (
          <div className="cards-wrapper">
            {data.map((creator) => (
            <Card

                key={creator.id}
                id={creator.id}
                name={creator.name}
                desc={creator.desc}
                url={creator.url}
                imageURL={creator.imageURL}
            />
            ))}
            </div>
        ) : (<h1>No creators</h1>)}
      </div>
      
    );
}