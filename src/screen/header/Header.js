import React from "react";
import { connect } from "react-redux";
import { Link, Router, BrowserRouter as Route } from "react-router-dom";
import home from "../main/Home";
import Users from "../Users/Users";
import './index.css'


const Header = ({ count }) => {

    return (
        <div className='header'>
            <div className='links'>
                <Link className='homeLink' to="/">Home</Link>
                <Link className='usersLink' to="/users">Users</Link>
            </div>
            <div className='counter'>Count:{count}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        count: state.count
    })
}

export default connect(mapStateToProps)(Header);