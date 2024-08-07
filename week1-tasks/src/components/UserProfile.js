import React from 'react';
import '../App.css';
import { useLocation,useNavigate } from 'react-router-dom'

const UserProfile = () => {
    let naviagte = useNavigate()
    const location = useLocation() ;
    const { user } = location.state || {};
    console.log("duser" , user);
    if (!user) {
        return <div>No user data available</div>;
    }

    console.log(user);
    return (
    <>
        <div className="profile-container">
            <h1 className="profile-header">User Profile</h1>
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Age:</strong> {user.age}</p>
                {/* <p><strong>Profession:</strong> {profession}</p>
                <p><strong>Hobbies:</strong> {hobbies}</p>
                <p><strong>Skills:</strong> {skills}</p> */}
            </div>
        </div>
            <button type='danger' style={{backgroundColor:'red'}} onClick={()=>{naviagte('/')}} >Log out</button>
        </>
    );
};

export default UserProfile;
