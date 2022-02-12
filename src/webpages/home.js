import React, { useState, useEffect }  from 'react';
import images from './images'
import Button from './button';
import { Link } from 'react-router-dom';

/*
this function grabs all the data from the RESP API and displays
it onto the page from mapping each iterable to bootstrap cards
the buttons are seperate components imported, with the id set as the 
URL parameter. it is chained with other methods to display loading, or error state
*/

const Home = () => {
    let image = 'error.png'
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
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
                    setIsLoaded(true);
                    setUsers(data);
                },(error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [])

    //if no data is returned, this will center on screen 
    if (error) {
        return  <div className="loading-header"><h1>This user doesn't exist :(</h1></div>;
    }
    
    //this will display while loading
    if (!isLoaded) 
    {
        return(<div className="loading-header">
                    <h1> Loading Users One Sec</h1>
                </div>);
    } 

    /*
    sends one container and n number of bootstrap cards in the array
    each iterable takes in one jsx button, whose link points to a URL path
    the image rendered depends on the top level domain of the email address 
    */
   
    else 
    {
        return(<div className="container"> 
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