import React, { Component } from 'react'
import './UserProfile.css'
import userPhoto from '../../../../assets/ProfilePhoto.jpeg'

class UserProfile extends Component {
    render() {
        const { name } = this.props;
        return (
            <div id="userProfile">
                <ul>
                    <li>
                        <img src={ userPhoto } alt=""/>
                    </li>
                    <li>
                        <li> 
                            <strong> {name} </strong>
                        </li>
                        <li id="profile">
                            View Profile
                        </li>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile