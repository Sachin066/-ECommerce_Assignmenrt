import React, { useContext } from 'react';
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    
    const {logout} = useContext(userContext);
    const storageData = localStorage.getItem('currentUser');
    console.log('',storageData);
    if(storageData == 'null' || storageData == undefined){
        return(
            <h1>No SignIn user to go login</h1>
        )
    }
    const user = JSON.parse(atob(storageData));
    console.log(user);

    const navigate = useNavigate();

    const handleLogout = ()=>{
        logout();
        navigate('/login');
    }
    
    return (
        <div className="dark:bg-gray-900 h-[92vh] py-16">
            
        <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md mb-8 animate-fade-in dark:bg-gray-800 dark:text-white">
          <h2 className="text-2xl font-bold mb-4 capitalize">{`${user.name.firstname} ${user.name.lastname}`}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
      
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>{`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
          </div>
      
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p>{`Phone: ${user.phone}`}</p>
          </div>
      
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Geolocation</h3>
            <p>{`Latitude: ${user.address.geolocation.lat}, Longitude: ${user.address.geolocation.long}`}</p>
          </div>
      
          <div className="flex justify-around">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">
              Logout
            </button>
          </div>
        </div>
        
        </div>
      );
      
};

export default Profile;
