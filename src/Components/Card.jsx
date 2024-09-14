/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Doctor from "/images/doctor.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from './utils/global.context';


const Card = ({ dentist, canDelete }) => {

  const { dispatch } = useGlobalContext();

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favsDentists = JSON.parse(localStorage.getItem('favs')) || [];
    if (favsDentists.some(favsDentist => favsDentist.id === dentist.id)) {
      setIsFav(true);
    }
  }, [dentist.id]);

  const addFav = () => {
    const { id, name, website } = dentist;
    const newDentist = { id, name, website };
    const localStorageFavs = JSON.parse(localStorage.getItem('favs')) || [];

    if (!localStorageFavs.some(savedDentist => savedDentist.id === dentist.id)) {
      localStorageFavs.push(newDentist);
      localStorage.setItem('favs', JSON.stringify(localStorageFavs));
      dispatch({ type: "ADD_FAV", payload: newDentist });
      setIsFav(true);
      alert(`Dentist ${newDentist.name} was added to favourites successfully!`);
    } else {
      alert('This dentist is already in the favourites list, please choose another one');
    }
  };

  const delFav = () => {
    const localStorageFavs = JSON.parse(localStorage.getItem('favs'));
    const newFavs = localStorageFavs.filter((localDentist) => localDentist.id !== dentist.id);
    localStorage.setItem('favs', JSON.stringify(newFavs));
    dispatch({ type: "DEL_FAV", payload: dentist.id });
    setIsFav(false);
  };

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
        <img src={Doctor} alt="Doctor image" />
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
      </Link>
      {canDelete ? (
        <button onClick={delFav} className="favButton">
          Delete favourite ❌
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          {isFav ? "✅" : "🔲"}
        </button>
      )}

    </div>
  );
};

export default Card;
