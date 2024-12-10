import { createContext, useEffect, useState } from "react";

export const userContext = createContext(null);


export default function UserContext({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);


  const login = (values) => {
    console.log('login called from context', values);

    console.log('all users from context', allUsers);


    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email === values.email && allUsers[i].password === values.password) {
        console.log('user found',allUsers[i]);
        // alert('LogIn Successfully.')
        swal("Congratulations!", "Login Successful", "success")

        setIsLoggedIn(true);
      
        localStorage.setItem('currentUser',btoa(JSON.stringify(allUsers[i])));
        localStorage.setItem('login', true)

        
      }

    }

  }

  const logout = ()=>{
    localStorage.setItem('currentUser', null);
    localStorage.setItem('login', false);
    setIsLoggedIn(false);
  }


  return (
    <div>

      <userContext.Provider value={{ isLoggedIn, currentUser, setIsLoggedIn, login, logout, setAllUsers }}>
        {children}
      </userContext.Provider>

    </div>
  )
}
