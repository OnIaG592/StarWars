import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUsers, saveUser } from "../../redux/action";
import './index.css';


const Home = ({ newUser, selectedUser, changedUser, enabled }) => {

    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [age, setAge] = useState(0);
    const [mail, setMail] = useState("");
    const [gender, setGender] = useState("");
    const [login, setLogin] = useState("");

    const getName = (event) => {
        setName(event.target.value);
    }
    const getSurname = (event) => {
        setSurName(event.target.value);
    }
    const getAge = (event) => {
        setAge(event.target.value);
    }
    const getMail = (event) => {
        setMail(event.target.value);
    }
    const getGender = (event) => {
        setGender(event.target.value);
    }
    const getLogin = (event) => {
        setLogin(event.target.value);
    }
    return (
        <div className='usersContainer'>
            <input placeholder="Name" onChange={getName} value={selectedUser[0]?.name}></input>
            <input placeholder="Surname" onChange={getSurname} defaultValue={selectedUser[0]?.surName}></input>
            <input placeholder="Age" onChange={getAge} defaultValue={selectedUser[0]?.age}></input>
            <input placeholder="@mail" onChange={getMail} defaultValue={selectedUser[0]?.mail}></input>
            <input placeholder="Login" onChange={getLogin} defaultValue={selectedUser[0]?.login}></input>
            <select onChange={getGender} defaultValue={selectedUser[0]?.gender}>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
            </select>
            <div className='homeButtons'>
                <button className='registerButton' disabled={!enabled} onClick={ () => {
                    newUser({
                    name,
                    surName,
                    age,
                    mail,
                    gender,
                    login
                }), alert('User is Added')} }>Register</button>
                <button className='saveButton' disabled={enabled} onClick={() => changedUser({
                    id: selectedUser[0].id,
                    name,
                    surName,
                    age,
                    mail,
                    gender,
                    login
                })}><Link className='editLink' to='/users'>Save</Link></button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return ({
        selectedUser: state.editedUser,
        enabled: state.isEnabled,
    })
}

const mapsDipatchToProps = (dispatch) => {
    return ({
        newUser: (data) => dispatch(addUsers(data)),
        changedUser: (id) => dispatch(saveUser(id))
    })
}
export default connect(mapStateToProps, mapsDipatchToProps)(Home);