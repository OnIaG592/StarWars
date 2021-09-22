import React, { useEffect, useState } from "react";
import { Fragment } from "react";


const RenderPlanetsItems = ({ item }) => {

    const [isShowMore, setIsShowMore]=useState(false)
    
    return (
        <div style={{color:"#e88413",fontSize:"20px"}}>
          <div className="Planets">
            <p style={{color:"#eb0909"}}>Name: {item.name}</p>
            {isShowMore
                ?<>
            <p>Created: {item.created}</p>
           <p>Rotation period: {item.rotation_period}</p>
           <p>Orbital period: {item.orbital_period}</p>
           <p>Diameter: {item.diameter}</p>
           <p>Climate: {item.climate}</p>
           <p>Gravity: {item.gravity}</p>
           <p>Terrain: {item.terrain}</p>
           <p>Population: {item.population}</p>
           <p>Residents: {item.residents.map(i => i + '\n')}</p>
           <p>Films: {item.films}</p>
           <p>Edited: {item.edited}</p>
           </>
           :<button className="coolBeans" onClick={()=>setIsShowMore(true)}>ShowMore More</button>}
           </div>
          </div> 
    )
}

export default RenderPlanetsItems;
