import React, { useState, useEffect}  from 'react';
import {useParams} from "react-router-dom";
import images from './images';

/* 
This function takes in the id which is the parameter determined from the URL
it is then parsed together with the REST API, the chained with several methods
to determine it's state such as loaded, error, or the user object which is 
eventually loaded into the JSX component
*/ 


const User = () => {

    let {id} = useParams()  
    let image = 'error.png' //default white image loads until stored image fully loaded

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const [userAddress, setUserAddress] = useState([]);
    const [userCompany, setUserCompany] = useState([]);

    //main function for fetching the data
    useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => {
                if (!res.ok) 
                { 
                    throw Error('could not fetch the data for that resource');
                } 
                else 
                {
                    return res.json();
                }
                
              })
            .then(
                (data) => {
                    setUser(data);
                    setIsLoaded(true);
                    setUserAddress(data.address);
                    setUserCompany(data.company);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [])
   

    //if an error is thrown during the fetch process, this will render
    if (error) {
        return  <div className="loading-header"><h1>This user doesn't exist :(</h1></div>;
    }

    //this will render until the fetch method is completed
    if (!isLoaded) 
    {
        return( <div className="loading-header">
                    <h1> Loading User One Sec</h1>
                </div>);
    } 

    //if the user object exists, state is loaded and no error from fetch, this will appear
    else 
    {
        return(
            <div className="container"> 
                <div className="row">
                    <div className="col-12 col-lg-4 user-photo">
                        {images.forEach(function(value) {
                            if (user.email  == undefined)
                            {
                                return true
                            }

                            else
                            {   var tld = user.email.split('@')[1].split('.')[1]
                                if (value.tld == tld)
                                {
                                    image = value.src;
                                }
                            }
                        })}
                        <img  src={require('../assets/'+image)}   className="card-img-top" className="card-focus"></img>
                    </div>
                    <div className="card col-12 col-lg-8 border-0">
                        <div className="card-body">
                            <h1>{user.name}</h1>
                            <h4 className="card-text">username: @{user.username}</h4>
                            <h4 className="card-text">email: {user.email}</h4>
                            <h4 className="card-text">website: <a  href={'http://www.'+user.website} target={user.website}>{user.website}</a></h4> 
                            <h4 className="card-text">phone: {user.phone}</h4>
                            <h4 className="card-text">company: {userCompany.name}</h4>
                            <h4 className="card-text">address:</h4>
                            <ul>
                                <li>{userAddress.street}</li>
                                <li>{userAddress.suite}</li>
                                <li>{userAddress.city}</li>
                                <li>{userAddress.zipcode}</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;



