import React, { useEffect, useState } from "react";
import { Fragment } from "react";


const RenderPeopleItems = ({ item }) => {

    const [isShowMore, setIsShowMore]=useState(false)
    
    return (
        <div style={{color:"whitesmoke",fontSize:"20px"}}>
          <div className="People">
            <p style={{color:"#14e34b"}}>Name: {item.name}</p>
            {isShowMore
                ?<>
            <p>Height: {item.height}</p>
           <p>Mass: {item.mass}</p>
           <p>Hair Color: {item.hair_color}</p>
           <p>Skin Color: {item.skin_color}</p>
           <p>Eye Color: {item.eye_color}</p>
           <p>Birth Year: {item.birth_year}</p>
           <p>Gender: {item.gender}</p>
           <p>Homeworld: {item.homeworld}</p>
           <p>Films: {item.films.map(i => i + '\n')}</p>
           <p>Species: {item.species}</p>
           <p>Vehicles: {item.vehicles}</p>
           <p>Starships: {item.starships.map(i => i + '\n')}</p>
           <p>Created: {item.created}</p>
           <p>Edited: {item.edited}</p>
           </>
           :<button className="coolBeans" onClick={()=>setIsShowMore(true)}>ShowMore More</button>}
           </div>
          </div> 
    )
}

export default RenderPeopleItems;
