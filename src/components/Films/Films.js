import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import './Films.css';
import RenderFilmsItems from "./RenderFilmsItems"


const Films = ({ items }) => {

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
        <div style={{color:"#d9d921",fontSize:"20px"}}>
            {
            isSearch
            ?   <div className="Films">
            <p style={{color:"#14e34b"}}>Title:{searchedItem.title}</p>
           <p>Episode Id: {searchedItem.episode_id}</p>
           <p>Opening crawl: {searchedItem.opening_crawl}</p>
           <p>Director: {searchedItem.director}</p>
           <p>Producer: {searchedItem.producer}</p>
           <p>Release date: {searchedItem.release_date}</p>
           <p>Characters: {searchedItem.characters.map(i => i + '\n')}</p>
           <p>Planets: {searchedItem.planets.map(i => i + '\n')}</p>
           <p>Starships: {searchedItem.starships.map(i => i + '\n')}</p>
           <p>Vehicles: {searchedItem.vehicles.map(i => i + '\n')}</p>
           <p>Species: {searchedItem.species.map(i => i + '\n')}</p>
           <p>Created: {searchedItem.created.map(i => i + '\n')}</p>
           <p>Edited: {searchedItem.edited}</p>
           </div> 
            :data.map((el) => <RenderFilmsItems key={el.name} item={el} /> )}
            <div className="test">
            <button className="Button" disabled={!isNext} onClick={loadMore}>Load More</button>
            <input className="Input" placeholder="Name of the film"
              onChange={(e) => setSearch(e.target.value)} >
            </input>
            <button className="Button" onClick={Search}>Search</button>
            </div>
        </div>
    )
}

export default Films;