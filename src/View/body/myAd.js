import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { Redirect, useHistory } from "react-router";
import GetAPI from "../../services/getAPI";

import "../body/body.css";

const MyAd = () => {
  let history=useHistory();
  const [HousingId, setHousingId] = useState([]);
  const id = localStorage.getItem("id");
  

  const handleClick = (id) => {
    GetAPI.DeleteHousing(id)
      .then((res) => {
        
        const posts = HousingId.filter((key) => key._id !== id);
        setHousingId(posts);
        console.log(res)
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    console.log(HousingId.length);
    GetAPI.GetHousingByID(id)
      .then((res) => {
        console.log(res.data)
       
        setHousingId(res.data);})
      .catch((e) => console.error(e));
  }, []);

  const updateClick = (event) => {
    console.log(event)
    history.push({
      
       pathname: "/update",
       state: { ids: event },
      
     });
    
   };
  
  return (
    <>
      <section className="container py-4 pt-5">
        <h1 className="h3 text-center font-weight-bold mt-3 mb-4">
          Mes Annonces
        </h1>
        <h2 className="h4 text-center mb-5">
          Retrouvez ici l'ensemble des annonces que vous avez créées
        </h2>

        <div className="row mb-4 row justify-content-md-center">
          <div className="col-xl-8 order-1">
            {HousingId.length === 0 ? (
              <h2 className="h4 text-center py-5 mb-5">
                Vous n'avez pas créé d'annonce pour le moment
              </h2>
            ) : (
              HousingId.map((key) => (
                <div className="bg-white rounded rounded-huge shadow p-5 p-md-5 mb-4">
                  <h2 className="h6 font-weight-bold text-uppercase text">
                    {key.housingtype} {key.numberpieces} pièces {key.surface}m²{" "}
                    {key.adresse} à {key.city}, {key.department}
                  </h2>

                  <div
                    className="float-sm-right justify-content-md-center
 "
                  >
                    <button 
                      onClick={(e) => handleClick(key._id, e)}
                      className="trash margin"
                    >
                      <BsTrash />
                    </button>

                    <button onClick={(e)=> updateClick(key._id, e)} className="pencil">
                      <BsPencil />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAd;
