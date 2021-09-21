import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import RenderVehiclesItems from "./RenderVehiclesItems";


const Vehicles = ({ items }) => {

    const [data, setData] = useState([]);
    const [isNext, setIsNext] = useState(false);
    const [counter,setCounter] = useState(0)
    const [search,setSearch] = useState("")
    const [isSearch,setIsSearch] = useState(false)
    const [searchedItem,setSearchedItem] = useState({})
    const getDataBase = async (url) => {

        const dataBase = await fetch(url)
            .then((res) => res.json())
            .catch((err) => console.log(err));
        const temp = [...data, ...dataBase.results];
        setData(temp);
        setIsNext(dataBase.next);
    }

    useEffect(() => {
        if (isNext) {
            getDataBase(isNext);
        }
    }, [counter]);

    useEffect(() => {
        getDataBase(items);
    }, []);

    const loadMore =() => {
        setCounter(counter+1)
    }
    const Search =() => {
          data.map((el)=>{
            if(el.name.includes(search)){
                  setIsSearch(true)
                  setSearchedItem(el)
              }
          })
       }
    
    return (
        <div style={{color:"#0b0c12",fontSize:"20px"}}>
            {
            isSearch
            ? <div className="Vehichles">
            <p style={{color:"red"}}>Name: {searchedItem.name}</p>
           <p>Model: {searchedItem.model}</p>
           <p>Manufacturer: {searchedItem.manufacturer}</p>
           <p>Cost in credits: {searchedItem.cost_in_credits}</p>
           <p>Length: {searchedItem.length}</p>
           <p>Max atmosphering speed: {searchedItem.max_atmosphering_speed}</p>
           <p>Crew: {searchedItem.crew}</p>
           <p>Passengers: {searchedItem.passengers}</p>
           <p>Cargo capacity: {searchedItem.cargo_capacity}</p>
           <p>Consumables: {searchedItem.consumables}</p>
           <p>Vehicle class: {searchedItem.vehicle_class}</p>
           <p>Pilots: {searchedItem.pilots}</p>
           <p>Films: {searchedItem.films}</p>
           <p>Created: {searchedItem.created}</p>
           <p>Edited: {searchedItem.edited}</p>
           </div> 
            :data.map((el) => <RenderVehiclesItems key={el.name} item={el}/> )
            }
            <div className="test">
            <button className="Button" disabled={!isNext} onClick={loadMore}>Load More</button>
            <input className="Input" placeholder="Name of the vehicle"
              onChange={(e) => setSearch(e.target.value)} >
            </input>
            <button className="Button" onClick={Search}>Search</button>
        </div>
        </div>
    )
}

export default Vehicles;