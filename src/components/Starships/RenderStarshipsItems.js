import React, { useEffect, useState } from "react";
import { Fragment } from "react";


const RenderStarshipsItems = ({ item }) => {

    const [isShowMore, setIsShowMore]=useState(false)
    
    return (
        <div style={{color:"#ba1e47",fontSize:"20px"}}>
           <div className="Startships">
            <p style={{color:"whitesmoke"}}>Name: {item.name}</p>
            {isShowMore
                ?<>
           <p>Model: {item.model}</p>
           <p>Manufacturer: {item.manufacturer}</p>
           <p>Cost in credits: {item.cost_in_credits}</p>
           <p>Length: {item.length}</p>
           <p>Max atmosphering speed: {item.max_atmosphering_speed}</p>
           <p>Crew: {item.crew}</p>
           <p>Passengers: {item.passengers}</p>
           <p>Cargo capacity: {item.cargo_capacity}</p>
           <p>Consumables: {item.consumables}</p>
           <p>Hyperdrive rating: {item.hyperdrive_rating}</p>
           <p>MGLT: {item.MGLT}</p>
           <p>Starship class: {item.starship_class}</p>
           <p>Pilots: {item.pilots}</p>
           <p>Films: {item.films}</p>
           <p>Created: {item.created}</p>
           <p>Edited: {item.edited}</p>
           </>
           :<button className="Button" onClick={()=>setIsShowMore(true)}>ShowMore More</button>}
           </div>
          </div> 
    )
}

export default RenderStarshipsItems;
