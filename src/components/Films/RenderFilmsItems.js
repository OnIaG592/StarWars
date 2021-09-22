import React, { useEffect, useState } from "react";
import { Fragment } from "react";


const RenderFilmsItems = ({ item }) => {

    const [isShowMore, setIsShowMore]=useState(false)
    
    return (
        <div style={{color:"#d9d921",fontSize:"20px"}}>
         <div className="Films">
            <p style={{color:"#14e34b"}}>Title: {item.title}</p>
            {isShowMore
                ?<>
             <p>Episode Id: {item.episode_id}</p>
           <p>Opening crawl: {item.opening_crawl}</p>
           <p>Director: {item.director}</p>
           <p>Producer: {item.producer}</p>
           <p>Release date: {item.release_date}</p>
           <p>Characters: {item.characters.map(i => i + '\n')}</p>
           <p>Planets: {item.planets.map(i => i + '\n')}</p>
           <p>Starships: {item.starships.map(i => i + '\n')}</p>
           <p>Vehicles: {item.vehicles.map(i => i + '\n')}</p>
           <p>Species: {item.species.map(i => i + '\n')}</p>
           <p>Created: {item.created}</p>
           <p>Edited: {item.edited}</p>
           </>
           :<button className="coolBeans" onClick={()=>setIsShowMore(true)}>ShowMore More</button>}
           </div>
          </div> 
    )
}

export default RenderFilmsItems;
