import React, { useEffect, useState } from "react";
import RenderPlanetsItems from "./RenderPlanetsItems";


const Planets = ({ items }) => {

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
        <div style={{color:"#e88413",fontSize:"20px"}}>
            {
            isSearch
            ? <div className="Planets">
            <p style={{color:"#eb0909"}}>Name: {searchedItem.name}</p>
           <p>Created: {searchedItem.created}</p>
           <p>Rotation period: {searchedItem.rotation_period}</p>
           <p>Orbital period: {searchedItem.orbital_period}</p>
           <p>Diameter: {searchedItem.diameter}</p>
           <p>Climate: {searchedItem.climate}</p>
           <p>Gravity: {searchedItem.gravity}</p>
           <p>Terrain: {searchedItem.terrain}</p>
           <p>Population: {searchedItem.population}</p>
           <p>Residents: {searchedItem.residents.map(i => i + '\n')}</p>
           <p>Films: {searchedItem.films}</p>
           <p>Edited: {searchedItem.edited}</p>
           </div> 
            :data.map((el) => <RenderPlanetsItems key={el.name} item={el}/> )}
            <div className="test">
            <button className="Button" disabled={!isNext} onClick={loadMore}>Load More</button>
            <input className="Input" placeholder="Name of the planet"
              onChange={(e) => setSearch(e.target.value)} >
            </input>
            <button className="Button" onClick={Search}>Search</button>
        </div>
           </div> 

    )
}

export default Planets;