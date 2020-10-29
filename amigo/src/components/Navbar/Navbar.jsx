import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img className='logo' src={logo}></img>
                <p className='logoName'>Amigo</p>
                <a href="#">Contact</a>
                <a href="#">About Us</a>
                <a className="active" href="#">Posting</a>
                <a href="#home">Home</a>
            </div>
        )
    }
}

export default Navbar