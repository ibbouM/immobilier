import GetAPI from "../../../src/services/getAPI";
import React, { useState, useEffect } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

import "../Form/form.css";
import { useHistory } from "react-router";

var styles = {
  background: "#ed5545",
  color: "white",
};
var style2 = {
  width: "100%",
  height: "300px",
};

const FormAnnonce = () => {
  let history = useHistory();
  const [housingFilter, setHousingFilter] = useState([]);
  const [city, setCity] = useState("");
  const [leasecontract, setLeasecontract] = useState("");
  const [housingtype, setHousingtype] = useState("");
  useEffect(() => {
    console.log(city);
    console.log(leasecontract);
    console.log(housingtype);
    console.log(housingFilter);
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(city);
    console.log(leasecontract);
    console.log(housingtype);

    GetAPI.GetHousingFilter(city, leasecontract, housingtype)
      .then((res) => setHousingFilter(res.data))
      .catch(() => console.error("Failed!"));
  };

  const handleClick = (event) => {
    history.push({
      pathname: "/description",
      state: { details: event },
    });
    console.log(event);
  };

  return (
    <>
      <h1 className="h3 text-center font-weight-bold mt-3 mb-4 ">
        Rechercher une annonce
      </h1>

      <div className="row mb-4 row justify-content-md-center">
        <form
          className="border col-md-6 col-md-offset-4"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="">Ville</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ville"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="">Rubrique</label>
              <select
                className="form-control"
                onChange={(event) => setLeasecontract(event.target.value)}
              >
                <option>Sélectionner...</option>
                <option value="Vente">Vente</option>
                <option value="Location">Location</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="">Type de bien</label>
              <select
                className="form-control"
                value={housingtype}
                onChange={(event) => setHousingtype(event.target.value)}
              >
                <option>Sélectionner...</option>
                <option value="Maison">Maison</option>
                <option value="Appartement">Appartement</option>
              </select>
            </div>

            <div className="col-md-4">
              <button type="submit" className="button">
                Rechercher
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <a
            href="#"
            className="btn  btn-block font-weight-semi-bold py-3 mb-4"
            style={styles}
          >
            <AiOutlineFileAdd /> Déposer une annonce gratuite
          </a>
        </div>
      </div>
      {housingFilter.map((key) => (
        <section className="container py-4 pt-5">
          <div onClick={() => handleClick(key)} className="row mb-4 row justify-content-md-center">
            <div className="col-xl-8 order-1">
              <div className="d-flex flex-column">
                <a
                  
                  className=" cursor-pointer bg-white rounded rounded-huge shadow p-0 flex-grow-1 d-flex flex-column text-decoration-none"
                >
                  <div className="position-relative rounded-top rounded-huge">
                    <div className="resultat-image border-bottom position-relative ">
                      <img
                        src={key.image[0].image}
                        alt=""
                        className="rounded-top rounded-huge  ng-lazyloaded"
                        style={style2}
                      />
                    </div>
                  </div>
                  <div className="resultat-description p-3 flex-grow-1">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <div className="h4">
                          <span
                            className="badge font-weight-normal mr-2"
                            style={styles}
                          >
                            {key.surface}m²
                          </span>
                          <span
                            className="badge  font-weight-normal mr-2"
                            style={styles}
                          >
                            {key.numberpieces} pièces
                          </span>
                          <span
                            className="badge font-weight-normal mr-2"
                            style={styles}
                          >
                            {key.price} €
                          </span>
                        </div>
                      </div>
                    </div>

                    <h2 className="h6 font-weight-bold text-uppercase text-secondary ">
                      {key.housingtype} à{" "}
                      {leasecontract === "Vente" ? (
                        <span>vendre</span>
                      ) : (
                        <span>louer</span>
                      )}{" "}
                      {key.city}
                    </h2>
                    <h3 className="h6 font-weight-normal text-secondary">
                      {key.housingtype} {key.numberpieces} pièces {key.surface}
                      m² {key.adresse}
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default FormAnnonce;
