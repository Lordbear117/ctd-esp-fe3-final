/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../Components/Card";

const Favs = () => {

  let favs = JSON.parse(localStorage.getItem('favs'));

  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
            favs.map((dentist) => (
              <Card dentist={dentist} key={dentist.id} canDelete={true}/>
          ))) : <h2>You currently have no favorite dentists. Add some to see them here!</h2>}
      </div>
    </div>
  );
};

export default Favs;
