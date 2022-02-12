import React, { useState, useEffect }  from 'react';
import images from './images'
import Button from './button';

import { Link } from 'react-router-dom';

//https://medium.com/@nutanbhogendrasharma/step-by-step-consume-rest-api-in-react-application-48388f6c4d9c
const Home = () => {
    let image = 'error.png'
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then((data) => {setIsLoaded(true);setUsers(data);})
        }, [])

    if (!isLoaded) 
    {
        return(<div className="loading-header">
                    <h1> Loading Users One Sec</h1>
                </div>);
    } 
    
    else 
    {
        return(
                <div className="container"> 
                    <div className="row">
                
                        {users.map(user => (
                            <div key={user.id} className="col-12 col-lg-4 info-card" >
                                <div className="card">
                                    <div className="card-body"> 
                                        {images.forEach(function(value) {
                                            var tld = user.email.split('@')[1].split('.')[1]
                                            if (value.tld == tld)
                                            {
                                                image = value.src;
                                            }
                                        })}
                                        <img  src={require('../assets/'+image)}   className="card-img-top" ></img>
                                        <h5 className="card-title">{user.name}</h5>
                                        <p className="card-text username">@{user.username}</p>
                                        <p className="card-text"><a  href={'http://www.'+user.website} target={user.website}>{user.website}</a></p> 
                                        <Link to={`user/${user.id}`}><Button/></Link>
                                    </div>
                                </div>
                            </div>
                            ))}
                    </div>
                </div>);
    }
}
export default Home;