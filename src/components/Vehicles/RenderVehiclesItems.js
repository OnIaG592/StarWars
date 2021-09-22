import React, { useEffect, useState } from "react";
import { Fragment } from "react";


const RenderVehiclesItems = ({ item }) => {

    const [isShowMore, setIsShowMore]=useState(false)
    
    return (
        <div style={{color:"#0b0c12",fontSize:"20px"}}>
           <div className="Vehichles">
            <p style={{color:"red"}}>Name: {item.name}</p>
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
           <p>Vehicle class: {item.vehicle_class}</p>
           <p>Pilots: {item.pilots}</p>
           <p>Films: {item.films}</p>
           <p>Created: {item.created}</p>
           <p>Edited: {item.edited}</p>
           </>
           :<button className="coolBeans" onClick={()=>setIsShowMore(true)}>ShowMore More</button>}
           </div>
          </div> 
    )
}

export default RenderVehiclesItems;
