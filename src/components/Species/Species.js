import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import RenderSpeciesItems from "./RenderSpeciesItems";


const Species = ({ items }) => {

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
        <div style={{color:"#bce007",fontSize:"20px"}}>
            {
            isSearch
            ? <div className="Species">
            <p style={{color:"#01082e"}}>Name: {searchedItem.name}</p>
           <p>Classification: {searchedItem.classification}</p>
           <p>Designation: {searchedItem.designation}</p>
           <p>Average height period: {searchedItem.average_height}</p>
           <p>Skin colors: {searchedItem.skin_colors}</p>
           <p>Hair colors: {searchedItem.hair_colors}</p>
           <p>Eye colors: {searchedItem.eye_colors}</p>
           <p>Average lifespan: {searchedItem.average_lifespan}</p>
           <p>Homeworld: {searchedItem.homeworld}</p>
           <p>Language: {searchedItem.language}</p>
           <p>People: {searchedItem.people}</p>
           <p>Films: {searchedItem.films}</p>
           <p>Created: {searchedItem.created}</p>
           <p>Edited: {searchedItem.edited}</p>
           </div> 
            :data.map((el)=><RenderSpeciesItems key={el.name} item={el} />)}
            <div className="test">
            <button className="Button" disabled={!isNext} onClick={loadMore}>Load More</button>
            <input className="Input" placeholder="Name of the species"
              onChange={(e) => setSearch(e.target.value)} >
            </input>
            <button className="Button" onClick={Search}>Search</button>
        </div>
        </div>
    )
}

export default Species;