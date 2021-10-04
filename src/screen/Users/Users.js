import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUsers, editeUser } from "../../redux/action";
import './index.css'

const Users = ({ newData, count, notDeletedUsers, editedUser }) => {

    return (
        <div className='addedUser'>
            {newData.map((item) =>
                <div className='addedUsersData'>
                    <p>Name: {item?.name}</p>
                    <p>Surname: {item?.surName}</p>
                    <p>Age: {item?.age}</p>
                    <p>Mail: {item?.mail}</p>
                    <p>Gender: {item?.gender}</p>
                    <p>Login: {item?.login}</p>
                    <div className='addedButtons'>
                        <button className='editButton' onClick={() => { editedUser(item.id) }}><Link className='editLink' to='/'>Edit</Link></button>
                        <button className='deleteButton' onClick={() => notDeletedUsers(item.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        notDeletedUsers: (id) => dispatch(deleteUsers(id)),
        editedUser: (id) => dispatch(editeUser(id))
    })
}

const mapStateToProps = (state) => {
    return ({
        newData: state.users,
        count: state.count
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);