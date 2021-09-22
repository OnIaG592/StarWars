import React, { useEffect, useState } from "react";
import RenderPeopleItems from "./RenderPeopleItems";

const People = ({ items }) => {

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
        <div style={{color:"whitesmoke",fontSize:"20px"}}>
            {
            isSearch
            ? <div className="People">
            <p style={{color:"#14e34b"}}>Name: {searchedItem.name}</p>
           <p>Height: {searchedItem.height}</p>
           <p>Mass: {searchedItem.mass}</p>
           <p>Hair Color: {searchedItem.hair_color}</p>
           <p>Skin Color: {searchedItem.skin_color}</p>
           <p>Eye Color: {searchedItem.eye_color}</p>
           <p>Birth Year: {searchedItem.birth_year}</p>
           <p>Gender: {searchedItem.gender}</p>
           <p>Homeworld: {searchedItem.homeworld}</p>
           <p>Films: {searchedItem.films.map(i => i + '\n')}</p>
           <p>Species: {searchedItem.species}</p>
           <p>Vehicles: {searchedItem.vehicles}</p>
           <p>Starships: {searchedItem.starships.map(i => i + '\n')}</p>
           <p>Created: {searchedItem.created}</p>
           <p>edited: {searchedItem.edited}</p>
           </div> 
            : data.map((el) => <RenderPeopleItems key={el.name} item={el} /> )}
            <div className="test">
            <button className="coolBeans" disabled={!isNext} onClick={loadMore}>Load More</button>
            <input className="Input" placeholder="Name of the charachter"
              onChange={(e) => setSearch(e.target.value)} >
            </input>
            <button className="coolBeans" onClick={Search}>Search</button>
        </div>
        </div> 
    )
}

export default People;