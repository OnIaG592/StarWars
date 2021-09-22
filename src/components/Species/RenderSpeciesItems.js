import React, { useEffect, useState } from "react";
import { Fragment } from "react";


const RenderSpeciesItems = ({ item }) => {

    const [isShowMore, setIsShowMore]=useState(false)
    
    return (
        <div style={{color:"#bce007",fontSize:"20px"}}>
          <div className="Species">
            <p style={{color:"#01082e"}}>Name: {item.name}</p>
            {isShowMore
                ?<>
            <p>Classification: {item.classification}</p>
           <p>Designation: {item.designation}</p>
           <p>Average height period: {item.average_height}</p>
           <p>Skin colors: {item.skin_colors}</p>
           <p>Hair colors: {item.hair_colors}</p>
           <p>Eye colors: {item.eye_colors}</p>
           <p>Average lifespan: {item.average_lifespan}</p>
           <p>Homeworld: {item.homeworld}</p>
           <p>Language: {item.language}</p>
           <p>People: {item.people.map(i => i + '\n')}</p>
           <p>Films: {item.films.map(i => i + '\n')}</p>
           <p>Created: {item.created}</p>
           <p>Edited: {item.edited}</p>
           </>
           :<button className="coolBeans" onClick={()=>setIsShowMore(true)}>ShowMore More</button>}
           </div>
          </div> 
    )
}

export default RenderSpeciesItems;
