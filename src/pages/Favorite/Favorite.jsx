import React, { useEffect, useState } from 'react';

const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound] = useState("")
    useEffect( ()=>{
const favoriteItems = JSON.parse(localStorage.getItem("favorites"))
if(favoriteItems){
    setFavorites(favoriteItems);
}else{
    setNoFound("NO Data Found")
}

    },[])
console.log(favorites);


    
    return (
        <div>
            favorite route here
            {noFound}
        </div>
    );
};

export default Favorite;